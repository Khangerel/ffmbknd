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
            "trainings",
            "image_swipe2",
            "image_swipe3",
            "citizens",
            "image_background",
            "image_swipe1",
        ]
