from django.urls import path
from .views import SiteConfigListCreateView, SiteConfigDetailView

urlpatterns = [
    path('', SiteConfigListCreateView.as_view(), name='config_list_create'),
    path('<int:pk>/', SiteConfigDetailView.as_view(), name='config_detail'),
]
