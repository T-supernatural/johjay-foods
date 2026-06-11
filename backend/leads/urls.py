from django.urls import path
from .views import LeadCreateView, LeadListView, LeadDetailView

urlpatterns = [
    path('', LeadCreateView.as_view(), name='lead_create'),
    path('list/', LeadListView.as_view(), name='lead_list'),
    path('<int:pk>/', LeadDetailView.as_view(), name='lead_detail'),
]
