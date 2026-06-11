from rest_framework import generics, permissions
from .models import EventBooking
from .serializers import EventBookingSerializer

class EventBookingListCreateView(generics.ListCreateAPIView):
    serializer_class = EventBookingSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        # Admins can see all bookings, regular customers see only their own
        if self.request.user.is_staff:
            return EventBooking.objects.all().order_by('-event_date')
        return EventBooking.objects.filter(user=self.request.user).order_by('-event_date')

    def perform_create(self, serializer):
        # Automatically assign the authenticated user to the booking
        serializer.save(user=self.request.user)

class EventBookingDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventBookingSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        if self.request.user.is_staff:
            return EventBooking.objects.all()
        return EventBooking.objects.filter(user=self.request.user)
