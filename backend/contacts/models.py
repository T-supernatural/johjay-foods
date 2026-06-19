from django.db import models
from core.models import TimeStampedModel

class ContactMessage(TimeStampedModel):
    """
    Model for recording general inquiries and customer contact messages.
    """
    STATUS_CHOICES = (
        ('new', 'New'),
        ('read', 'Read'),
        ('responded', 'Responded'),
    )

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    subject = models.CharField(max_length=255)
    message = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"
