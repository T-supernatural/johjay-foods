from django.contrib import admin

from .models import Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
	list_display = ('id', 'user', 'status', 'total_amount', 'created_at')
	list_filter = ('status', 'created_at')
	search_fields = ('user__email',)
	ordering = ('-created_at',)
	readonly_fields = ('created_at', 'updated_at')
