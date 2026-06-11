from django.contrib import admin

from .models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
	list_display = ('name', 'email', 'phone', 'event_type', 'event_date', 'guest_count', 'status', 'created_at')
	list_filter = ('event_type', 'status', 'event_date')
	search_fields = ('name', 'email', 'phone', 'budget', 'message')
	ordering = ('-created_at',)
	readonly_fields = ('created_at', 'updated_at')
