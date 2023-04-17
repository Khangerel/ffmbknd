from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    # Fields
    email = models.EmailField()
    created = models.DateTimeField(auto_now_add=True, editable=False)
    first_name = models.TextField(max_length=100)
    uuid = models.UUIDField()
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    is_admin = models.BooleanField()
    last_name = models.TextField(max_length=100)


    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("users_User_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("users_User_update", args=(self.pk,))

