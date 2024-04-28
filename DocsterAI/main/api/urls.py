from django.urls import path
from main.api.views import (FrameworkListAPIView, FrameworkDetailAPIView, FrameworkCreateAPIView,
                            MethodListAPIView, MethodDetailAPIView, MethodCreateAPIView,
                            ClassListAPIView, ClassDetailAPIView, ClassCreateAPIView,
                            VariablesListAPIView, VariablesDetailAPIView, VariablesCreateAPIView)

app_name = 'main'

urlpatterns = [
    # Framework URLs
    path('frameworks/', FrameworkListAPIView.as_view(), name='frameworks-list'),
    path('frameworks/<int:pk>/', FrameworkDetailAPIView.as_view(), name='frameworks-detail'),
    path('frameworks/create/', FrameworkCreateAPIView.as_view(), name='frameworks-create'),

    # Method URLs
    path('methods/', MethodListAPIView.as_view(), name='methods-list'),
    path('methods/<int:pk>/', MethodDetailAPIView.as_view(), name='methods-detail'),
    path('methods/create/', MethodCreateAPIView.as_view(), name='methods-create'),

    # Class URLs
    path('classes/', ClassListAPIView.as_view(), name='classes-list'),
    path('classes/<int:pk>/', ClassDetailAPIView.as_view(), name='classes-detail'),
    path('classes/create/', ClassCreateAPIView.as_view(), name='classes-create'),

    # Variables URLs
    path('variables/', VariablesListAPIView.as_view(), name='variables-list'),
    path('variables/<int:pk>/', VariablesDetailAPIView.as_view(), name='variables-detail'),
    path('variables/create/', VariablesCreateAPIView.as_view(), name='variables-create'),
]