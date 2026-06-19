from django.urls import path
from .views import ContactMessageListCreateView, ContactMessageDetailView

urlpatterns = [
    path('', ContactMessageListCreateView.as_view(), name='contact_list_create'),
    path('<int:pk>/', ContactMessageDetailView.as_view(), name='contact_detail'),
]
