from unittest import TestCase
from main import valores

class TrianguloTest(TestCase):
    def test_valores(self):
        self.assertEqual(valores(10,10,8), "Isóceles")
