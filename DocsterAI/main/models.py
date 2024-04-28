from django.db import models

# Create your models here.

# Framework model
class Framework(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()

# Method model
class Method(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    example_snippet = models.TextField()
    framework = models.ForeignKey('Framework', on_delete=models.CASCADE, related_name='methods', to_field='name')
    parent_method = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)

# Class model
class Class(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    example_snippet = models.TextField()
    framework = models.ForeignKey('Framework', on_delete=models.CASCADE, related_name='classes', to_field='name')
    methods = models.ForeignKey('Method', on_delete=models.CASCADE, blank=True, null=True)

# Variables model
class Variables(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    example_snippet = models.TextField()
    framework = models.ForeignKey('Framework', on_delete=models.CASCADE, related_name='variables', to_field='name')