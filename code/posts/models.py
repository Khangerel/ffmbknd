from django.db import models
from django.urls import reverse


class category(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    name = models.CharField(max_length=50)
    slug = models.SlugField()
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        pass

    def __str__(self):
        return str(self.name)

    def get_absolute_url(self):
        return reverse("posts_category_detail", args=(self.slug,))

    def get_update_url(self):
        return reverse("posts_category_update", args=(self.slug,))



class post(models.Model):

    # Relationships
    categories = models.ManyToManyField("posts.category")
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    image_thumbnail = models.ImageField(upload_to="upload/images/post/thumbnails")
    image_banner = models.ImageField(upload_to="upload/images/post/banners")
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=4000)
    is_featured = models.BooleanField()

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("posts_post_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("posts_post_update", args=(self.pk,))

