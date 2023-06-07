from django.db import models
from django.urls import reverse
from ckeditor.fields import RichTextField

class category(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    name = models.CharField(max_length=50)
    slug = models.SlugField()

    class Meta:
        verbose_name_plural = "Categories"

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
    tags = models.ManyToManyField("posts.tags")
    author = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE)
    # Fields
    created = models.DateTimeField(auto_now_add=True, editable=False)
    publish_date = models.DateTimeField(auto_now=True, editable=True)
    image_thumbnail = models.ImageField(upload_to="upload/images/post/thumbnails/")
    image_banner = models.ImageField(upload_to="upload/images/post/banners/")
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    is_featured = models.BooleanField()
    content = RichTextField()
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=400, null=True)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("posts_post_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("posts_post_update", args=(self.pk,))



class tags(models.Model):

    # Relationships
    lang_id = models.ForeignKey("languages.language", on_delete=models.CASCADE)

    # Fields
    slug = models.SlugField()
    name = models.TextField(max_length=100)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        verbose_name_plural = "Tags"

    def __str__(self):
        return str(self.name)

    def get_absolute_url(self):
        return reverse("posts_tags_detail", args=(self.slug,))

    def get_update_url(self):
        return reverse("posts_tags_update", args=(self.slug,))

