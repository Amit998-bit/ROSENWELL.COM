# Generated by Django 5.0.6 on 2024-05-22 09:56

import tinymce.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rswllapp', '0005_alter_product_dis'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='dis',
            field=tinymce.models.HTMLField(),
        ),
    ]
