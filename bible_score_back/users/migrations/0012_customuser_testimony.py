# Generated by Django 3.2.9 on 2022-05-12 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_remove_customuser_pfp'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='testimony',
            field=models.CharField(default='I was saved', max_length=10000),
        ),
    ]