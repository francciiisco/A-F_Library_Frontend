from rest_framework import serializers 
from .models import Books

class BooksSerializer(serializers.ModelSerializer): # serializers.ModelSerializer just tells django to convert sql to JSON
    class Meta:
        model = Books# tell django which model to use
        fields = ('id', 'title', 'author', 'series') # tell django which fields to include
