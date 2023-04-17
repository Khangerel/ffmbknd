# Generated by Django 4.2 on 2023-04-17 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='landing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('trainings', models.IntegerField()),
                ('image_swipe2', models.ImageField(upload_to='upload/images/infos/landing/')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('image_swipe3', models.ImageField(upload_to='upload/images/infos/landing/')),
                ('citizens', models.IntegerField()),
                ('image_background', models.ImageField(upload_to='upload/images/infos/landing/')),
                ('image_swipe1', models.ImageField(upload_to='upload/images/infos/landing/')),
            ],
        ),
        migrations.CreateModel(
            name='partner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=50)),
                ('logo', models.ImageField(upload_to='upload/images/partners/')),
            ],
        ),
    ]
