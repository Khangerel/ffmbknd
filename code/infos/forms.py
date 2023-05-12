from django import forms
from . import models


class partnerForm(forms.ModelForm):
    class Meta:
        model = models.partner
        fields = [
            "name",
            "logo",
        ]


class landingForm(forms.ModelForm):
    class Meta:
        model = models.landing
        fields = [
            "image_swipe1",
            "image_swipe2",
            "citizens",
            "trainings",
            "image_swipe3",
        ]
