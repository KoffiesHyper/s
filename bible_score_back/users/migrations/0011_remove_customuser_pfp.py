# Generated by Django 3.2.9 on 2022-05-12 15:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_alter_customuser_pfp'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='pfp',
        ),
    ]