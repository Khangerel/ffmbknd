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
        "image_banner",
        "last_updated",
        "created",
        "image_title",
        "image_description",
        "whoweare",
        "our_vision",
    ]
    readonly_fields = [
        "image_banner",
        "last_updated",
        "created",
        "image_title",
        "image_description",
        "whoweare",
        "our_vision",
    ]


class timelineAdminForm(forms.ModelForm):

    class Meta:
        model = models.timeline
        fields = "__all__"


class timelineAdmin(admin.ModelAdmin):
    form = timelineAdminForm
    list_display = [
        "title",
        "last_updated",
        "color",
        "created",
        "description",
    ]
    readonly_fields = [
        "title",
        "last_updated",
        "color",
        "created",
        "description",
    ]


admin.site.register(models.main, mainAdmin)
admin.site.register(models.timeline, timelineAdmin)
