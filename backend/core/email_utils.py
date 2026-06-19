"""
Email notification utilities for Johjay Foods.
Handles sending notifications to business owner and confirmation emails to customers.
All exceptions are caught to prevent email failures from breaking API responses.
"""

from django.core.mail import send_mail
from django.conf import settings
import logging

logger = logging.getLogger(__name__)


def send_new_lead_notification(lead):
    """Notify business owner of new quote request"""
    if not settings.BUSINESS_OWNER_EMAIL:
        logger.warning('BUSINESS_OWNER_EMAIL not configured, skipping notification')
        return

    subject = f'New Catering Quote Request from {lead.name}'
    message = f"""
New quote request received on Johjay Foods website:

Name: {lead.name}
Email: {lead.email}
Phone: {lead.phone}
Event Type: {lead.get_event_type_display()}
Event Date: {lead.event_date}
Guest Count: {lead.guest_count}
Budget: {lead.budget}

Message:
{lead.message}

---
Login to the admin dashboard to respond:
{settings.FRONTEND_URL}/admin/leads
    """
    try:
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.BUSINESS_OWNER_EMAIL],
            fail_silently=False
        )
        logger.info(f'Lead notification email sent to {settings.BUSINESS_OWNER_EMAIL}')
    except Exception as e:
        logger.error(f'Failed to send lead notification email: {e}')


def send_lead_confirmation(lead):
    """Confirm to customer that their quote request was received"""
    subject = 'We Received Your Catering Quote Request - Johjay Foods'
    message = f"""
Dear {lead.name},

Thank you for reaching out to Johjay Foods! We have received
your quote request for your {lead.get_event_type_display()} on {lead.event_date}.

Our team will review your requirements and get back to you
within 24-48 hours with a customized catering proposal.

If you have any urgent questions, feel free to reply to this
email or contact us directly.

Warm regards,
Johjay Foods Team
Catering & Event Food Services
    """
    try:
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [lead.email],
            fail_silently=False
        )
        logger.info(f'Lead confirmation email sent to {lead.email}')
    except Exception as e:
        logger.error(f'Failed to send lead confirmation email: {e}')


def send_new_contact_notification(contact_message):
    """Notify business owner of new contact form message"""
    if not settings.BUSINESS_OWNER_EMAIL:
        logger.warning('BUSINESS_OWNER_EMAIL not configured, skipping notification')
        return

    subject = f'New Contact Message from {contact_message.name}'
    message = f"""
New message received via Contact form:

Name: {contact_message.name}
Email: {contact_message.email}
Phone: {getattr(contact_message, 'phone', 'N/A')}
Subject: {contact_message.subject}

Message:
{contact_message.message}

---
Login to the admin dashboard to respond:
{settings.FRONTEND_URL}/admin/messages
    """
    try:
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.BUSINESS_OWNER_EMAIL],
            fail_silently=False
        )
        logger.info(f'Contact notification email sent to {settings.BUSINESS_OWNER_EMAIL}')
    except Exception as e:
        logger.error(f'Failed to send contact notification email: {e}')


def send_contact_confirmation(contact_message):
    """Confirm to customer their message was received"""
    subject = 'We Received Your Message - Johjay Foods'
    message = f"""
Dear {contact_message.name},

Thank you for contacting Johjay Foods. We have received your
message and will respond within 24-48 hours.

Warm regards,
Johjay Foods Team
Catering & Event Food Services
    """
    try:
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [contact_message.email],
            fail_silently=False
        )
        logger.info(f'Contact confirmation email sent to {contact_message.email}')
    except Exception as e:
        logger.error(f'Failed to send contact confirmation email: {e}')
