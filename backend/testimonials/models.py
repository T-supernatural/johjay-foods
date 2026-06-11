from django.db import models
from core.models import TimeStampedModel

class Testimonial(TimeStampedModel):
    """
    Model for storing client feedback, reviews, and event success testimonials.
    """
    author_name = models.CharField(max_length=255)
    author_title = models.CharField(max_length=255, blank=True, help_text="e.g. 'Wedding Planner', 'Corporate Client'")
    content = models.TextField()
    rating = models.PositiveIntegerField(default=5, help_text="Rating from 1 to 5")
    is_featured = models.BooleanField(default=False)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"Testimonial by {self.author_name} - {self.rating} Stars"
