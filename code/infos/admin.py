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
        "name",
        "logo",
        "last_updated",
        "created",
    ]
    readonly_fields = [
        "last_updated",
        "created",
    ]


class landingAdminForm(forms.ModelForm):

    class Meta:
        model = models.landing
        fields = "__all__"


class landingAdmin(admin.ModelAdmin):
    form = landingAdminForm
    list_display = [
        "citizens",
        "trainings",
        "image_swipe1",
        "image_swipe2",
        "image_swipe3",
        "last_updated",
        "created",
    ]
    readonly_fields = [
        "last_updated",
        "created",
    ]


admin.site.register(models.partner, partnerAdmin)
admin.site.register(models.landing, landingAdmin)
