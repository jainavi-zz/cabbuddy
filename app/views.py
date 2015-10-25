from django import http
from django.template import loader
from django.shortcuts import render_to_response

import webapp2

def home(request):
  # template = loader.get_template("index.html")
  return render_to_response("index.html")
