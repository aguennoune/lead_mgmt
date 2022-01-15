from rest_framework import routers
from .api import ProspectViewSet

router = routers.DefaultRouter()
router.register('api/prospects', ProspectViewSet, 'prospects')

urlpatterns = router.urls
