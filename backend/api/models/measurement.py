from django.db import models
class Measurement(models.Model):
    measurement_name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.measurement_name
