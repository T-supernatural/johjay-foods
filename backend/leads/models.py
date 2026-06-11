from django.db import models
from core.models import TimeStampedModel

class Lead(TimeStampedModel):
    """
    Model representing catering sales leads and initial event booking inquiries.
    """
    EVENT_CHOICES = (
        ('wedding', 'Wedding'),
        ('corporate', 'Corporate Event'),
        ('private_party', 'Private Party'),
        ('birthday', 'Birthday Celebration'),
        ('other', 'Other Special Event'),
    )

    STATUS_CHOICES = (
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('qualified', 'Qualified'),
        ('converted', 'Converted (Booked)'),
        ('lost', 'Lost'),
    )

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    event_type = models.CharField(max_length=50, choices=EVENT_CHOICES, default='private_party')
    event_date = models.DateField()
    guest_count = models.PositiveIntegerField()
    budget = models.CharField(max_length=100, help_text="Estimated budget range or amount")
    message = models.TextField(blank=True, help_text="Additional details, dietary requests, etc.")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')

    def __str__(self):
        return f"Lead: {self.name} - {self.get_event_type_display()} on {self.event_date}"
