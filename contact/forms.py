from django import forms
from languages.models import language
from . import models


class infoForm(forms.ModelForm):
    class Meta:
        model = models.info
        fields = [
            "title",
            "helper",
            "phone",
            "email",
            "address",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(infoForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()



class attendeeForm(forms.ModelForm):
    class Meta:
        model = models.attendee
        fields = [
            "is_partnership_opportunity",
            "message",
            "last_name",
            "is_generail_inquiry",
            "phone",
            "first_name",
            "is_training",
            "email",
        ]
