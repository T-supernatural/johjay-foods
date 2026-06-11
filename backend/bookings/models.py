from django.db import models
from django.conf import settings
from core.models import TimeStampedModel
from leads.models import Lead

class EventBooking(TimeStampedModel):
    """
    Model representing scheduled events and catering bookings.
    """
    STATUS_CHOICES = (
        ('pending_confirmation', 'Pending Confirmation'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )

    lead = models.OneToOneField(
        Lead,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='booking',
        help_text="Link to the lead that generated this booking"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='bookings',
        help_text="User account associated with this booking"
    )
    event_title = models.CharField(max_length=255)
    event_date = models.DateField()
    venue_address = models.TextField()
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='pending_confirmation')

    def __str__(self):
        return f"Booking: {self.event_title} on {self.event_date} ({self.get_status_display()})"
