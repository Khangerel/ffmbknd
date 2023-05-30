from django.db import models
from django.urls import reverse


class main(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    image_title = models.TextField(max_length=100)
    image_banner = models.ImageField(upload_to="upload/images/whoweare/main/")
    image_description = models.TextField(max_length=200)
    whoweare = models.TextField()
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    our_vision = models.TextField()

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
    created = models.DateTimeField(auto_now_add=True, editable=False)
    sub_title = models.TextField(max_length=200)
    title = models.TextField(max_length=100)
    image = models.ImageField(upload_to="upload/images/timeline/", blank=True)
    year = models.IntegerField()
    description = models.TextField(max_length=300)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    sequence = models.IntegerField(null=True)

    REQUIRED_FIELDS = ['title', 'sub_title']

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whoweare_timeline_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whoweare_timeline_update", args=(self.pk,))

class our_team(models.Model):

    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE, null=True)
    # Fields
    created = models.DateTimeField(auto_now_add=True, editable=False)
    full_name = models.TextField(max_length=100)
    image = models.ImageField(upload_to="upload/images/team/")
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    position = models.TextField(max_length=100)
    country = models.TextField(max_length=100)
    sequence = models.IntegerField(null=True)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whoweare_our_team_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whoweare_our_team_update", args=(self.pk,))