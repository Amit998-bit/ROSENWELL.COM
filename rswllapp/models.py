from django.db import models
from tinymce.models import HTMLField
#from ckeditor.fields import RichTextField

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):

        return self.name 

#class Sub_Category(models.Model):

    #name = models.CharField(max_length=200)
    #category = models.ForeignKey(Category,on_delete=models.CASCADE)

    #def __str__(self):

        #return self.name



class Product(models.Model):

    cat = models.ForeignKey(Category,on_delete=models.CASCADE)
    #subcat = models.ForeignKey(Sub_Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='ecomm/pimg')
    description = HTMLField(default="")
    short_descr = models.CharField(max_length=1000, default="")
    code = models.IntegerField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):

        return self.name
    
class Inquiry(models.Model):

    name = models.CharField(max_length=300)
    email = models.EmailField()
    mobile = models.CharField(max_length=13, null=True)
    ps = models.CharField(max_length=300)
    msg = models.CharField(max_length=1000)

    def __str__(self):
        
        return self.name
        

