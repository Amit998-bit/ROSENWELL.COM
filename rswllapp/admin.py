from django.contrib import admin
from .models import Category, Product, Inquiry

# Register your models here.

admin.site.register(Category)
#admin.site.register(Sub_Category)
admin.site.register(Product)
admin.site.register(Inquiry)

