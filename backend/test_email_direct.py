import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'johjay_foods_backend.settings')
django.setup()

from leads.models import Lead
from core.email_utils import send_new_lead_notification, send_lead_confirmation

# Get the last created lead
lead = Lead.objects.latest('created_at')

print(f"Testing email sending for lead: {lead.name}")
print(f"Lead ID: {lead.id}")
print()

print("=" * 50)
print("Sending Business Owner Notification Email...")
print("=" * 50)
send_new_lead_notification(lead)

print()
print("=" * 50)
print("Sending Customer Confirmation Email...")
print("=" * 50)
send_lead_confirmation(lead)

print()
print("Done!")
