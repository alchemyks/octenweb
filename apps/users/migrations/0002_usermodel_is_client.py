# Generated by Django 3.2.9 on 2021-11-07 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='is_client',
            field=models.BooleanField(default=False),
        ),
    ]