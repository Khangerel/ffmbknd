from django.contrib import admin
from django import forms

from . import models


class partnerAdminForm(forms.ModelForm):

    class Meta:
        model = models.partner
        fields = "__all__"


class partnerAdmin(admin.ModelAdmin):
    form = partnerAdminForm
    list_display = [
        "created",
        "last_updated",
        "name",
        "logo",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]


class landingAdminForm(forms.ModelForm):

    class Meta:
        model = models.landing
        fields = "__all__"


class landingAdmin(admin.ModelAdmin):
    form = landingAdminForm
    list_display = [
        "last_updated",
        "trainings",
        "image_swipe2",
        "created",
        "image_swipe3",
        "citizens",
        "image_background",
        "image_swipe1",
    ]
    readonly_fields = [
        "last_updated",
        "trainings",
        "image_swipe2",
        "created",
        "image_swipe3",
        "citizens",
        "image_background",
        "image_swipe1",
    ]


admin.site.register(models.partner, partnerAdmin)
admin.site.register(models.landing, landingAdmin)
