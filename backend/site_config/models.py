from django.db import models
from core.models import TimeStampedModel

class SiteConfig(TimeStampedModel):
    """
    Model representing dynamic site configurations and metadata.
    """
    key = models.CharField(max_length=100, unique=True, help_text="Config variable name (e.g. 'contact_email', 'catering_min_guests')")
    value = models.TextField(help_text="Config value")
    description = models.TextField(blank=True, help_text="Purpose or description of this config")

    def __str__(self):
        return f"{self.key}: {self.value}"

    class Meta:
        verbose_name = "Site Configuration"
        verbose_name_plural = "Site Configurations"
