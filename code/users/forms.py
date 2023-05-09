from django import forms
from . import models

class CustomUserForm(forms.ModelForm):
    class Meta:
        model = models.CustomUser
        fields = [
            "email",
            "first_name",
            "is_staff",
            "is_active",
            "last_name",
        ]

    def __init__(self, *args, **kwargs):
        super(CustomUserForm, self).__init__(*args, **kwargs)
