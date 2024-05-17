from django.shortcuts import render
from django.http import HttpResponse

def main(request):
    context = {}
    return render(request, 'main_home.html', context)
