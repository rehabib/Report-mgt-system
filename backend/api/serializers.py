from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {
            "password": {"write_only": True},
            
        }

    def create(self, validated_data):
        print(validated_data)

        user = User.objects.create_user(**validated_data)
        return user
    


from .models import (
    AgencyPlan,
    Department,
    Goals,
    DirectorPlan,
    Measurement,
    Perspective,
    Months,
    DailyReport,
    MonthlyReport,
    AStrategicGoal,
    DStrategicGoal,
    YearData
)

# Department Serializer
class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name', 'description']

# Goals Serializer
class GoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goals
        fields = ['id', 'goal_name']

# YearData Serializer
class YearDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = YearData
        fields = ['id', 'year']

# Perspective Serializer
class PerspectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perspective
        fields = ['id', 'perspective_name']

# Measurement Serializer
class MeasurementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Measurement
        fields = ['id', 'measurement_name']

# AStrategicGoal Serializer
class AStrategicGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = AStrategicGoal
        fields = ['id', 'strategic_goal']

# DStrategicGoal Serializer
class DStrategicGoalSerializer(serializers.ModelSerializer):
    goal = GoalsSerializer()  # Nested Goals serializer

    class Meta:
        model = DStrategicGoal
        fields = ['id', 'strategic_goal', 'goal']

# AgencyPlan Serializer
class AgencyPlanSerializer(serializers.ModelSerializer):
    perspective = PerspectiveSerializer()
    astrategic_goal = AStrategicGoalSerializer()
    measurement = MeasurementSerializer()
    year = YearDataSerializer()

    class Meta:
        model = AgencyPlan
        fields = '__all__'

# directorPlan Serializer
class DirectorPlanSerializer(serializers.ModelSerializer):
    perspective = PerspectiveSerializer()
    strategic_goal = DStrategicGoalSerializer()
    measurement = MeasurementSerializer()
    year = YearDataSerializer()

    class Meta:
        model = DirectorPlan
        fields = '__all__'

# Months Serializer
class MonthsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Months
        fields = ['id', 'name']

# DailyReport Serializer
class DailyReportSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer()
    year = YearDataSerializer()
    month = MonthsSerializer()
    goal = GoalsSerializer()
    measurement = MeasurementSerializer()

    class Meta:
        model = DailyReport
        fields = '__all__'

# MonthlyReport Serializer
class MonthlyReportSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer()
    year = YearDataSerializer()
    month = MonthsSerializer()
    perspective = PerspectiveSerializer()
    goal = GoalsSerializer()
    measurement = MeasurementSerializer()

    class Meta:
        model = MonthlyReport
        fields = '__all__'


