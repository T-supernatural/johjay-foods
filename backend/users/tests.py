from django.test import TestCase
from django.contrib.auth import get_user_model

class CustomUserTests(TestCase):
    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            email='customer@example.com',
            password='foo',
            full_name='John Doe',
            phone='123456789'
        )
        self.assertEqual(user.email, 'customer@example.com')
        self.assertEqual(user.full_name, 'John Doe')
        self.assertEqual(user.phone, '123456789')
        self.assertEqual(user.role, 'customer')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        User = get_user_model()
        superuser = User.objects.create_superuser(
            email='admin@example.com',
            password='foo',
            full_name='Admin User'
        )
        self.assertEqual(superuser.email, 'admin@example.com')
        self.assertEqual(superuser.full_name, 'Admin User')
        self.assertEqual(superuser.role, 'admin')
        self.assertTrue(superuser.is_active)
        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)
