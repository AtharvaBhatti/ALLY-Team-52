# Generated by Django 3.2.4 on 2023-12-08 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_plan'),
    ]

    operations = [
        migrations.CreateModel(
            name='Courses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('oneLiner', models.TextField()),
                ('description', models.TextField()),
                ('conductedBy', models.CharField(max_length=100)),
                ('postedOn', models.DateField()),
                ('registeredCount', models.IntegerField()),
                ('cost', models.IntegerField()),
                ('tags', models.ManyToManyField(to='main.Tag')),
            ],
        ),
    ]