from django.db import models
class Perspective(models.Model):
    perspective_name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.perspective_name

#Perspectives: Financial, Customer, Internal Processes, Learning & Growth.
