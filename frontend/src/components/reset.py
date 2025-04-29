from django.contrib.auth import get_user_model
User = get_user_model()

# Check if a user exists
print(User.objects.all())

# If you forgot password, reset it like this:
user = User.objects.get(username='report')  # Replace with actual username if you remember it
user.set_password('report123')  # Replace with your new password
user.save()


