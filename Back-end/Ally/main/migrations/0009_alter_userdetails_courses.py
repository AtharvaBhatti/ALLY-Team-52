# Generated by Django 3.2.4 on 2023-12-09 03:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_courses'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetails',
            name='courses',
            field=models.TextField(default='{}'),
        ),
    ]