from django.db import models
from django.urls import reverse


class partner(models.Model):

    # Fields
    name = models.CharField(max_length=50)
    logo = models.ImageField(upload_to="upload/images/partners/")
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        pass

    def __str__(self):
        return str(self.name)

    def get_absolute_url(self):
        return reverse("infos_partner_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("infos_partner_update", args=(self.pk,))



class landing(models.Model):

    # Fields
    image_swipe1 = models.ImageField(upload_to="upload/images/infos/landing/")
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    image_swipe2 = models.ImageField(upload_to="upload/images/infos/landing/")
    created = models.DateTimeField(auto_now_add=True, editable=False)
    citizens = models.IntegerField()
    trainings = models.IntegerField()
    image_swipe3 = models.ImageField(upload_to="upload/images/infos/landing/")

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("infos_landing_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("infos_landing_update", args=(self.pk,))

