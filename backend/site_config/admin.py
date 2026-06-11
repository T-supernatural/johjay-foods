from django.contrib import admin

from .models import SiteConfig


@admin.register(SiteConfig)
class SiteConfigAdmin(admin.ModelAdmin):
	list_display = ('key', 'value', 'description', 'updated_at')
	search_fields = ('key', 'value', 'description')
	ordering = ('key',)
	readonly_fields = ('created_at', 'updated_at')
