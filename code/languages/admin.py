from django.contrib import admin
from django import forms

from . import models


class languageAdminForm(forms.ModelForm):

    class Meta:
        model = models.language
        fields = "__all__"


class languageAdmin(admin.ModelAdmin):
    form = languageAdminForm
    list_display = [
        "name",
        "short_name",
        "created",
    ]
    readonly_fields = [
        "created",
    ]

class privacy_policyAdminForm(forms.ModelForm):

    class Meta:
        model = models.privacy_policy
        fields = "__all__"


class privacy_policyAdmin(admin.ModelAdmin):
    form = privacy_policyAdminForm
    list_display = [
        "created",
        "last_updated",
        "body",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]

admin.site.register(models.language, languageAdmin)
admin.site.register(models.privacy_policy, privacy_policyAdmin)