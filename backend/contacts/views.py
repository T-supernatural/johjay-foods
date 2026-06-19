from rest_framework import generics, permissions
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from core.email_utils import send_new_contact_notification, send_contact_confirmation

class ContactMessageListCreateView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        contact_message = serializer.save()
        send_new_contact_notification(contact_message)
        send_contact_confirmation(contact_message)

class ContactMessageDetailView(generics.RetrieveUpdateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = (permissions.IsAdminUser,)
