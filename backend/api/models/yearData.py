from django.db import models

class YearData(models.Model):
    year = models.IntegerField(unique = True) #admins can add years to expand the system 

    def __str__(self):
        return f"Year: {self.year}"
