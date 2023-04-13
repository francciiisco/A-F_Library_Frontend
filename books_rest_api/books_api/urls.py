from django.urls import path
from . import views

urlpatterns = [
    path('api/books', views.BooksList.as_view(), name='books_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/books/<int:pk>', views.BooksDetail.as_view(), name='books_detail'), # api/contacts will be routed to the ContactDetail view for handling
]
