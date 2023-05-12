from django.contrib import admin
from django import forms

from . import models


class mainAdminForm(forms.ModelForm):

    class Meta:
        model = models.main
        fields = "__all__"


class mainAdmin(admin.ModelAdmin):
    form = mainAdminForm
    list_display = [
        "whoweare",
        "our_vision",
        "image_title",
        "image_banner",
        "image_description",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]


class timelineAdminForm(forms.ModelForm):

    class Meta:
        model = models.timeline
        fields = "__all__"


class timelineAdmin(admin.ModelAdmin):
    form = timelineAdminForm
    list_display = [
        "title",
        "sub_title",
        "description",
        "year",
        "image",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]


admin.site.register(models.main, mainAdmin)
admin.site.register(models.timeline, timelineAdmin)
