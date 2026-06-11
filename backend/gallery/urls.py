from django.urls import path
from .views import GalleryImageListCreateView, GalleryImageDetailView

urlpatterns = [
    path('', GalleryImageListCreateView.as_view(), name='gallery_list_create'),
    path('<int:pk>/', GalleryImageDetailView.as_view(), name='gallery_detail'),
]
