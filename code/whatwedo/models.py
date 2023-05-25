from django.db import models
from django.urls import reverse


class howwedo(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    icon = models.ImageField(upload_to="upload/images/whatwedo/howwedo/")
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    title = models.TextField(max_length=100)
    color = models.CharField(max_length=30)
    description = models.TextField(max_length=200)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whatwedo_howwedo_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whatwedo_howwedo_update", args=(self.pk,))



class card(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    description = models.TextField(max_length=200)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    title = models.TextField(max_length=100)
    color = models.CharField(max_length=30)
    last_updated = models.DateTimeField(auto_now=True, editable=False)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whatwedo_card_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whatwedo_card_update", args=(self.pk,))



class project(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    description = models.TextField(max_length=500)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    title = models.TextField(max_length=100)
    image = models.ImageField(upload_to="upload/images/projects/")
    image_banner = models.ImageField(upload_to="upload/images/projects/", null=True)
    impact = models.IntegerField()
    color = models.CharField(max_length=30)
    issue = models.TextField(max_length=300)
    method = models.TextField(max_length=300)
    button_name = models.TextField(max_length=100, null=True)
    button_state = models.BooleanField(default=False)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whatwedo_project_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whatwedo_project_update", args=(self.pk,))

