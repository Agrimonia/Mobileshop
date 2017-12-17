from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^user/', include('user.urls')),
    url(r'add_book$', views.add_book, ),
    url(r'show_books$', views.show_books, ),
]