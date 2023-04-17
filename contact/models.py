from django.db import models
from django.urls import reverse


class info(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    title = models.TextField(max_length=100)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    helper = models.TextField(max_length=200)
    phone = models.CharField(max_length=30)
    email = models.EmailField()
    address = models.CharField(max_length=200)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("contact_info_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("contact_info_update", args=(self.pk,))



class attendee(models.Model):

    # Fields
    is_partnership_opportunity = models.BooleanField()
    message = models.CharField()
    last_name = models.TextField(max_length=100)
    is_generail_inquiry = models.BooleanField()
    phone = models.CharField(max_length=30)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    first_name = models.TextField(max_length=100)
    is_training = models.BooleanField()
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    email = models.EmailField()

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("contact_attendee_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("contact_attendee_update", args=(self.pk,))

