# Generated by Django 4.2.1 on 2023-05-30 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('whoweare', '0004_our_team'),
    ]

    operations = [
        migrations.AddField(
            model_name='our_team',
            name='sequence',
            field=models.IntegerField(null=True),
        ),
    ]