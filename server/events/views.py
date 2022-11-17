from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from .models import Event
from .serializers import EventSerializer
# Create your views here.

class EventListCreate(APIView):
    # permission_classes = 

    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        # return Response(serializer.data)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, *args, **kwargs):
        print(f"this is the request {request}")
        new_event = Event.objects.create(
            name = request.data['name'],
            description = request.data['description'],
            date = request.data['date'],
            time = request.data['time'],
            duration = request.data['duration']
        )
        new_event.save()
        serializer = EventSerializer(new_event)
        return Response(serializer.data)


# class EventList(generics.ListCreateAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer
