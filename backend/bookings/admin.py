from django.contrib import admin

from .models import EventBooking


@admin.register(EventBooking)
class EventBookingAdmin(admin.ModelAdmin):
	list_display = ('event_title', 'event_date', 'status', 'lead', 'user', 'created_at')
	list_filter = ('status', 'event_date')
	search_fields = ('event_title', 'venue_address', 'lead__name', 'user__email')
	ordering = ('-event_date',)
	readonly_fields = ('created_at', 'updated_at')
