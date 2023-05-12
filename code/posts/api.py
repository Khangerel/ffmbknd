from rest_framework import viewsets, permissions
from rest_framework.decorators import action, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from . import serializers
from . import models

class customPagination(PageNumberPagination):
    page_size = 10  # Number of items per page
    page_size_query_param = 'page_size'  # URL parameter to specify page size
    max_page_size = 100  # Maximum number of items per page

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,  # Total number of items
            'num_pages': self.page.paginator.num_pages,  # Total number of pages
            'current_page': self.page.number,  # Current page number
            'results': data,
            'items_range': f"{self.page.start_index()}-{self.page.end_index()}"  # Range of items being viewed
        })
    
class categoryViewSet(viewsets.ModelViewSet):
    """ViewSet for the category class"""

    queryset = models.category.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.categoryFilter
    serializer_class = serializers.categorySerializer
    # permission_classes = [permissions.IsAuthenticated]


class postViewSet(viewsets.ModelViewSet):
    """ViewSet for the post class"""

    queryset = models.post.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.postFilter
    serializer_class = serializers.postSerializer
    pagination_class = customPagination
    # permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['GET'])
    def by_category(self, request):
        category_id = request.query_params.get('category_id')
        category = get_object_or_404(models.category, id=category_id)
        posts = self.queryset.filter(categories=category)
        page = self.paginate_queryset(posts)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['GET'])
    def by_tag(self, request):
        tag_id = request.query_params.get('tag_id')
        tag = get_object_or_404(models.tag, id=tag_id)
        posts = self.queryset.filter(tags=tag)
        page = self.paginate_queryset(posts)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)

class tagsViewSet(viewsets.ModelViewSet):
    """ViewSet for the tags class"""

    queryset = models.tags.objects.all()
    serializer_class = serializers.tagsSerializer
    permission_classes = [permissions.IsAuthenticated]
