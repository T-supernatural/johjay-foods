from rest_framework import generics, permissions
from .models import SiteConfig
from .serializers import SiteConfigSerializer

class SiteConfigListCreateView(generics.ListCreateAPIView):
    queryset = SiteConfig.objects.all()
    serializer_class = SiteConfigSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

class SiteConfigDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SiteConfig.objects.all()
    serializer_class = SiteConfigSerializer
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
