from django.urls import path
from .views import TestimonialListCreateView, TestimonialDetailView

urlpatterns = [
    path('', TestimonialListCreateView.as_view(), name='testimonial_list_create'),
    path('<int:pk>/', TestimonialDetailView.as_view(), name='testimonial_detail'),
]
