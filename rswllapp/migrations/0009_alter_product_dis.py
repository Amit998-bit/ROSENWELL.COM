# Generated by Django 5.0.6 on 2024-05-22 10:50

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rswllapp', '0008_alter_product_dis'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='dis',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]