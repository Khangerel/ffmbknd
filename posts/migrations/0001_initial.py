# Generated by Django 4.2 on 2023-04-17 15:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('languages', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('lang_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='languages.language')),
            ],
        ),
        migrations.CreateModel(
            name='post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('image_thumbnail', models.ImageField(upload_to='upload/images/post/thumbnails')),
                ('image_banner', models.ImageField(upload_to='upload/images/post/banners')),
                ('title', models.CharField(max_length=200)),
                ('content', models.CharField(max_length=4000)),
                ('is_featured', models.BooleanField()),
                ('categories', models.ManyToManyField(to='posts.category')),
                ('lang_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='languages.language')),
            ],
        ),
    ]
