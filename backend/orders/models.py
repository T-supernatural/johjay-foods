from django.db import models
from django.conf import settings
from core.models import TimeStampedModel

class Order(TimeStampedModel):
    """
    Placeholder model for occasional food orders (secondary business feature).
    No complex checkout, payment, or cart models are defined in this phase.
    """
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('paid', 'Paid'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='orders'
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return f"Order #{self.id} - Status: {self.status} - Total: {self.total_amount}"
