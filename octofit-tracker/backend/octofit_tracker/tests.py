from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(email='test@example.com', name='Test User', password='testpass')
        self.assertEqual(user.email, 'test@example.com')

class TeamModelTest(TestCase):
    def test_create_team(self):
        user = User.objects.create(email='test2@example.com', name='Test User2', password='testpass')
        team = Team.objects.create(name='Team A')
        team.members.add(user)
        self.assertEqual(team.name, 'Team A')

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        user = User.objects.create(email='test3@example.com', name='Test User3', password='testpass')
        activity = Activity.objects.create(activity_id='a1', user=user, type='run', duration=30, date='2025-05-07')
        self.assertEqual(activity.type, 'run')

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        team = Team.objects.create(name='Team B')
        leaderboard = Leaderboard.objects.create(leaderboard_id='l1', team=team, points=100)
        self.assertEqual(leaderboard.points, 100)

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        user = User.objects.create(email='test4@example.com', name='Test User4', password='testpass')
        workout = Workout.objects.create(workout_id='w1', user=user, description='Pushups', date='2025-05-07')
        self.assertEqual(workout.description, 'Pushups')
