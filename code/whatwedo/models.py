from django.db import models
from django.urls import reverse


class howwedo(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    icon = models.ImageField(upload_to="upload/images/whatwedo/howwedo/")
    description = models.TextField(max_length=200)
    title = models.TextField(max_length=100)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    color = models.CharField(max_length=30)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whatwedo_howwedo_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whatwedo_howwedo_update", args=(self.pk,))



class mil4edu(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    image = models.ImageField(upload_to="upload/images/whatwedo/mil4edu/")
    name = models.CharField(max_length=30)
    content = models.CharField(max_length=3000)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)

    class Meta:
        pass

    def __str__(self):
        return str(self.name)

    def get_absolute_url(self):
        return reverse("whatwedo_mil4edu_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whatwedo_mil4edu_update", args=(self.pk,))



class card(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    title = models.TextField(max_length=100)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    color = models.CharField(max_length=30)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    description = models.TextField(max_length=200)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("whatwedo_card_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whatwedo_card_update", args=(self.pk,))



class wtd(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    created = models.DateTimeField(auto_now_add=True, editable=False)
    image = models.ImageField(upload_to="upload/images/whatwedo/wtd/")
    content = models.CharField(max_length=3000)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    name = models.CharField(max_length=30)
    teachers = models.IntegerField()
    attendees = models.IntegerField()

    class Meta:
        pass

    def __str__(self):
        return str(self.name)

    def get_absolute_url(self):
        return reverse("whatwedo_wtd_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("whatwedo_wtd_update", args=(self.pk,))

