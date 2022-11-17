from django.urls import path
from . import views

urlpatterns = [
    path('', views.EventListCreate.as_view())
    # path("", views.EventList.as_view())
]