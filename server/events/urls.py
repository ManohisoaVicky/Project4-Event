from django.urls import path
from . import views

urlpatterns = [
    path('', views.EventListCreate.as_view()),
    # path('new/', views.EventCreate.as_view()),
    path('<int:pk>/', views.EventDetailUpdateDelete().as_view())
    # path("<str:name>/", views.)
]