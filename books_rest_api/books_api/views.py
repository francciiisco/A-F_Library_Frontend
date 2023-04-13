from django.shortcuts import render
from rest_framework import generics
from .serializers import BooksSerializer
from .models import Books


# Create your views here.

class BooksList(generics.ListCreateAPIView):
    queryset = Books.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = BooksSerializer # tell django what serializer to use

class BooksDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Books.objects.all().order_by('id')
    serializer_class = BooksSerializer