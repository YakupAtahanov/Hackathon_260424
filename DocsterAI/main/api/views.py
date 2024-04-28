from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from main.models import Framework, Method, Class, Variables
from main.api.serializers import FrameworkSerializer, MethodSerializer, ClassSerializer, VariablesSerializer

# Framework APIs

# Framework List API View
class FrameworkListAPIView(ListAPIView):
    queryset = Framework.objects.all()
    serializer_class = FrameworkSerializer

# Framework Detail API View
class FrameworkDetailAPIView(RetrieveAPIView):
    queryset = Framework.objects.all()
    serializer_class = FrameworkSerializer

# Framework Create API View
class FrameworkCreateAPIView(CreateAPIView):
    serializer_class = FrameworkSerializer

# Method APIs

# Method List API View
class MethodListAPIView(ListAPIView):
    queryset = Method.objects.all()
    serializer_class = MethodSerializer

# Method Detail API View
class MethodDetailAPIView(RetrieveAPIView):
    queryset = Method.objects.all()
    serializer_class = MethodSerializer

# Method Create API View
class MethodCreateAPIView(CreateAPIView):
    serializer_class = MethodSerializer

# Class APIs

# Class List API View
class ClassListAPIView(ListAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

# Class Detail API View
class ClassDetailAPIView(RetrieveAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

# Class Create API View
class ClassCreateAPIView(CreateAPIView):
    serializer_class = ClassSerializer

# Variables APIs

# Variables List API View
class VariablesListAPIView(ListAPIView):
    queryset = Variables.objects.all()
    serializer_class = VariablesSerializer

# Variables Detail API View
class VariablesDetailAPIView(RetrieveAPIView):
    queryset = Variables.objects.all()
    serializer_class = VariablesSerializer

# Variables Create API View
class VariablesCreateAPIView(CreateAPIView):
    serializer_class = VariablesSerializer