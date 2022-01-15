from prospects.models import Prospect
from rest_framework import viewsets, permissions
from .serializers import ProspectSerializer

# Prospect Viewset


class ProspectViewSet(viewsets.ModelViewSet):
    queryset = Prospect.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProspectSerializer
