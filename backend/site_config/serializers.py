from rest_framework import serializers
from .models import SiteConfig

class SiteConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteConfig
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')
