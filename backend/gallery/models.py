from django.db import models
from core.models import TimeStampedModel

class GalleryImage(TimeStampedModel):
    """
    Model for showcasing event catering food, presentations, and venues.
    Designed to be Cloudinary-compatible using standard Django ImageField.
    """
    CATEGORY_CHOICES = (
        ('weddings', 'Weddings'),
        ('corporate', 'Corporate Events'),
        ('private', 'Private Parties'),
        ('plated_meals', 'Plated Meals'),
        ('buffet', 'Buffet Setups'),
        ('desserts', 'Desserts & Platters'),
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='gallery/')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='private')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} - {self.get_category_display()}"
