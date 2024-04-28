from django.contrib import admin
from main.models import Framework, Method, Class, Variables

# Register your models here.
admin.site.register(Framework)
admin.site.register(Method)
admin.site.register(Class)
admin.site.register(Variables)