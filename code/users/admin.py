from django.contrib import admin
from django import forms

from . import models


class UserAdminForm(forms.ModelForm):

    class Meta:
        model = models.CustomUser
        fields = "__all__"


class UserAdmin(admin.ModelAdmin):
    form = UserAdminForm
    list_display = [
        "first_name",
        "last_name",
        "email",
        "is_staff",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]


admin.site.register(models.CustomUser, UserAdmin)
