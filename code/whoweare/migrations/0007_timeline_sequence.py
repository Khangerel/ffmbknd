# Generated by Django 4.2.1 on 2023-05-30 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('whoweare', '0006_our_team_lang_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='timeline',
            name='sequence',
            field=models.IntegerField(null=True),
        ),
    ]