from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
	model = CustomUser
	ordering = ('email',)
	list_display = ('email', 'full_name', 'phone', 'role', 'is_staff', 'is_active')
	list_filter = ('role', 'is_staff', 'is_superuser', 'is_active')
	search_fields = ('email', 'full_name', 'phone')
	readonly_fields = ('last_login', 'date_joined')

	fieldsets = (
		(None, {'fields': ('email', 'password')}),
		('Personal info', {'fields': ('full_name', 'phone', 'role')}),
		('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
		('Important dates', {'fields': ('last_login', 'date_joined')}),
	)

	add_fieldsets = (
		(
			None,
			{
				'classes': ('wide',),
				'fields': ('email', 'full_name', 'phone', 'role', 'password1', 'password2'),
			},
		),
	)
