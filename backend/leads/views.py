from rest_framework import generics, permissions
from .models import Lead
from .serializers import LeadSerializer
from core.email_utils import send_new_lead_notification, send_lead_confirmation

class LeadListCreateView(generics.ListCreateAPIView):
    queryset = Lead.objects.all().order_by('-created_at')
    serializer_class = LeadSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        lead = serializer.save()
        send_new_lead_notification(lead)
        send_lead_confirmation(lead)

class LeadDetailView(generics.RetrieveUpdateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = (permissions.IsAdminUser,)
