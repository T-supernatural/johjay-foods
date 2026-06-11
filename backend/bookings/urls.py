from django.urls import path
from .views import EventBookingListCreateView, EventBookingDetailView

urlpatterns = [
    path('', EventBookingListCreateView.as_view(), name='booking_list_create'),
    path('<int:pk>/', EventBookingDetailView.as_view(), name='booking_detail'),
]
