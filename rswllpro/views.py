from django.shortcuts import render,redirect
from rswllapp.models import Category, Product,Inquiry
from django.contrib import messages
from django.http import HttpResponse

def Master(request):

    return render (request, 'master.html')


def Index(request):

     #product = Category.objects.all()
     #context = {
          
         # 'product':product,
    # }
    #product = Product.objects.get(id=pk)
    #return render(request,'index.html', {'product':product})
     return render(request,'index.html')

def Contect(request):

      if request.method == "POST":
           
           name = request.POST['name']
           email = request.POST['email']
           mobile = request.POST['mobile']
           ps = request.POST['ps']
           msg = request.POST['msg']
           
           ct = Inquiry(name=name, email=email, mobile=mobile, ps=ps, msg=msg)

           ct.save()

           return HttpResponse("thank you ..We'll contact you shortly Soon.. ") 

      return render(request, 'contact.html')

def Categry(request, bholenath):

     bholenath = bholenath.replace('_',' ')

     try:
          category = Category.objects.get(name=bholenath)
          product = Product.objects.filter(cat=category)
          
          return render(request, 'categories.html', {'product':product, 'category':category})
          
     except:
           
         
           messages.success(request,'thats category ist dipaly here ')
           return redirect('index')
           



    #return render(request,'categories.html')

def Companypro(request):

    return render(request,'company-profile.html')


def Career(request):

    return render(request,'career.html')


def Product_details(request,pk):
     
     product = Product.objects.get(id=pk)
     return  render(request,'product-details.html',{'product':product})

     #context = {
            
           #'product':product,
     #}
     
     #return render(request,'product-details.html',context)
