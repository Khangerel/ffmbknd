from django.db import models
from django.urls import reverse


class main(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    image_banner = models.ImageField(upload_to="upload/images/whoweare/main/")
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    image_title = models.TextField(max_length=100)
    image_description = models.TextField(max_length=200)
    whoweare = models.CharField(max_length=2000)
    our_vision = models.CharField(max_length=2000)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whoweare_main_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whoweare_main_update", args=(self.pk,))



class timeline(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    title = models.CharField(max_length=30)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    color = models.CharField(max_length=30)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    description = models.CharField(max_length=100)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whoweare_timeline_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whoweare_timeline_update", args=(self.pk,))

