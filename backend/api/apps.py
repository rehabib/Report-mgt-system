from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'



class AccountsConfig(AppConfig):
    name = 'accounts'

    def ready(self):
        import accounts.signals  # This imports the signals when the app is ready

