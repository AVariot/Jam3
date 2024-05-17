from django.shortcuts import render
import random
from . import data
from . import models

def new_seance(request):
    context = {}
    return render(request, 'main_home.html', context)

def continue_seance(request):
    context = {}
    return render(request, 'main_home.html', context) 

def user_page(request):
    context = {}
    return render(request, 'main_home.html', context) 

def login(request):
    context = {}
    return render(request, 'main_home.html', context)

def signin(request):
    context = {}
    return render(request, 'main_home.html', context)

def main(request):
    rdm = random.randint(0, 3)
    name = data.jo[rdm]
    context = {
        "bandeau": name
    }
    return render(request, 'main_home.html', context) 
