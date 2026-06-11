from rest_framework import generics, permissions
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialListCreateView(generics.ListCreateAPIView):
    serializer_class = TestimonialSerializer

    def get_queryset(self):
        # Public users can only see approved testimonials, admins can see all
        if self.request.user.is_staff:
            return Testimonial.objects.all()
        return Testimonial.objects.filter(is_approved=True)

    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

class TestimonialDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
    permission_classes = (permissions.IsAdminUser,)
