from django.urls import path
from .views import LeadListCreateView, LeadDetailView

urlpatterns = [
    path('', LeadListCreateView.as_view(), name='lead_list_create'),
    path('<int:pk>/', LeadDetailView.as_view(), name='lead_detail'),
]
