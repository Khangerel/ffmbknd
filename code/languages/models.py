from django.db import models
from django.urls import reverse


class language(models.Model):

    # Fields
    created = models.DateTimeField(auto_now_add=True, editable=False)
    name = models.TextField(max_length=50)
    short_name = models.TextField(max_length=50, null=True)

    class Meta:
        pass

    def __str__(self):
        return str(self.name)

    def get_absolute_url(self):
        return reverse("languages_language_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("languages_language_update", args=(self.pk,))

