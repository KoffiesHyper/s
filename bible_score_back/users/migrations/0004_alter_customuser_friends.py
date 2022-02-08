# Generated by Django 3.2.9 on 2022-02-08 11:30

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_customuser_friends'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='friends',
            field=models.ManyToManyField(blank=True, related_name='_users_customuser_friends_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
