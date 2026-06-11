from django.test import TestCase
from datetime import date
from .models import Lead

class LeadModelTests(TestCase):
    def test_create_lead(self):
        lead = Lead.objects.create(
            name='Jane Wedding',
            email='jane@example.com',
            phone='987654321',
            event_type='wedding',
            event_date=date(2026, 12, 25),
            guest_count=150,
            budget='$5,000 - $8,000',
            message='Need vegan options.'
        )
        self.assertEqual(lead.name, 'Jane Wedding')
        self.assertEqual(lead.event_type, 'wedding')
        self.assertEqual(lead.guest_count, 150)
        self.assertEqual(lead.status, 'new')
