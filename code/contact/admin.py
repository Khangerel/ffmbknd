from django.contrib import admin
from django import forms

from . import models


class infoAdminForm(forms.ModelForm):

    class Meta:
        model = models.info
        fields = "__all__"


class infoAdmin(admin.ModelAdmin):
    form = infoAdminForm
    list_display = [
        "last_updated",
        "title",
        "created",
        "helper",
        "phone",
        "email",
        "address",
    ]
    readonly_fields = [
        "last_updated",
        "title",
        "created",
        "helper",
        "phone",
        "email",
        "address",
    ]


class attendeeAdminForm(forms.ModelForm):

    class Meta:
        model = models.attendee
        fields = "__all__"


class attendeeAdmin(admin.ModelAdmin):
    form = attendeeAdminForm
    list_display = [
        "is_partnership_opportunity",
        "message",
        "last_name",
        "is_generail_inquiry",
        "phone",
        "created",
        "first_name",
        "is_training",
        "last_updated",
        "email",
    ]
    readonly_fields = [
        "is_partnership_opportunity",
        "message",
        "last_name",
        "is_generail_inquiry",
        "phone",
        "created",
        "first_name",
        "is_training",
        "last_updated",
        "email",
    ]


admin.site.register(models.info, infoAdmin)
admin.site.register(models.attendee, attendeeAdmin)
