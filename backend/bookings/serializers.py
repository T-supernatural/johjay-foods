from rest_framework import serializers
from .models import EventBooking

class EventBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventBooking
        fields = '__all__'
        read_only_fields = ('id', 'status', 'created_at', 'updated_at')
