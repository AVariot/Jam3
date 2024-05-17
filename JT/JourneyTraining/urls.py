from django.urls import path
from . import views

urlpatterns = [
    path("new", views.new_seance, name="newseance"),
    path("login", views.new_seance, name="login"),
    path("signin", views.new_seance, name="signin"),
    path("continue", views.continue_seance, name="continue"),
    path("user", views.user_page, name="user"),
    path("", views.main, name="main")
]
