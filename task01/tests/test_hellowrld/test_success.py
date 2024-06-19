from tests.test_hellowrld import HellowrldLambdaTestCase


class TestSuccess(HellowrldLambdaTestCase):

    def test_success(self):
        self.assertEqual(self.HANDLER.handle_request(dict(), dict()), 200)

