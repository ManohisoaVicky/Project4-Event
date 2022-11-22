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
        events = Event.objects.all().order_by('-id')

        name = request.query_params.get("name")

        if name is not None or "":
            events = events.filter(name__icontains=name)

        serializer = EventSerializer(events, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, *args, **kwargs):
        new_event = Event.objects.create(
            name = request.data['name'],
            description = request.data['description'],
            date = request.data['date'],
            time = request.data['time'],
            duration = request.data['duration'],
            host_id = request.user.id
        )
        new_event.save()
        serializer = EventSerializer(new_event)
        return JsonResponse(serializer.data, safe=False)


class EventDetailUpdateDelete(APIView):

    def get(self, request, pk):
        event = Event.objects.get(id=pk)
        serializer = EventSerializer(event)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk):
        event = Event.objects.get(id=pk)
        serializer = EventSerializer(event, request.data)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data)

    def delete(self, request, pk):
        event = Event.objects.get(id=pk)
        event.delete()

        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    
class AllUserEvents(APIView):

    def get(self, request, pk):
        events = Event.objects.filter(host_id=pk)
        serializer = EventSerializer(events, many=True)
        return JsonResponse(serializer.data, safe=False)


