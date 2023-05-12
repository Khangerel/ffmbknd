from rest_framework import viewsets, permissions, status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import serializers
from . import models


class infoViewSet(viewsets.ModelViewSet):
    """ViewSet for the info class"""

    queryset = models.info.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.infoFilter
    serializer_class = serializers.infoSerializer
    # permission_classes = [permissions.IsAuthenticated]


class attendeeViewSet(viewsets.ModelViewSet):
    """ViewSet for the attendee class"""

    queryset = models.attendee.objects.all()
    serializer_class = serializers.attendeeSerializer
    # permission_classes = [permissions.IsAuthenticated]

@api_view(['POST'])
def create_attendee(request):
    # Get data
    attendee_data = request.data.copy()

    if models.attendee.objects.filter(email=attendee_data['email']).exists():
        return Response({'message': 'You have already registered!'}, status=status.HTTP_400_BAD_REQUEST)

    # Create a new attendee
    attendee = models.attendee(**attendee_data)
    attendee.save()

    serializer = serializers.attendeeSerializer(attendee)

    return Response(serializer.data, status=status.HTTP_201_CREATED)