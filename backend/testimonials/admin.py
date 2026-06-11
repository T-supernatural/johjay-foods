from django.contrib import admin

from .models import Testimonial


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
	list_display = ('author_name', 'rating', 'is_featured', 'is_approved', 'created_at')
	list_filter = ('rating', 'is_featured', 'is_approved')
	search_fields = ('author_name', 'author_title', 'content')
	ordering = ('-created_at',)
	readonly_fields = ('created_at', 'updated_at')
