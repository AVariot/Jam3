from django.urls import path
from . import views

urlpatterns = [
    path("huh/", views.index, name="index")
]
