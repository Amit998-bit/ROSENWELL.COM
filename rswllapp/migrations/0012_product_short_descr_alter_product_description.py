# Generated by Django 5.0.6 on 2024-05-24 10:06

import tinymce.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rswllapp', '0011_remove_product_dis_product_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='short_descr',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=tinymce.models.HTMLField(default=''),
        ),
    ]