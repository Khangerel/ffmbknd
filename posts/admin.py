from django.contrib import admin
from django import forms

from . import models


class categoryAdminForm(forms.ModelForm):

    class Meta:
        model = models.category
        fields = "__all__"


class categoryAdmin(admin.ModelAdmin):
    form = categoryAdminForm
    list_display = [
        "name",
        "slug",
        "last_updated",
        "created",
    ]
    readonly_fields = [
        "name",
        "slug",
        "last_updated",
        "created",
    ]


class postAdminForm(forms.ModelForm):

    class Meta:
        model = models.post
        fields = "__all__"


class postAdmin(admin.ModelAdmin):
    form = postAdminForm
    list_display = [
        "last_updated",
        "created",
        "image_thumbnail",
        "image_banner",
        "title",
        "content",
        "is_featured",
    ]
    readonly_fields = [
        "last_updated",
        "created",
        "image_thumbnail",
        "image_banner",
        "title",
        "content",
        "is_featured",
    ]


admin.site.register(models.category, categoryAdmin)
admin.site.register(models.post, postAdmin)
