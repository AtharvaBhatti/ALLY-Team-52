from rest_framework.decorators import api_view, permission_classes
from rest_framework.reverse import reverse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(["GET"])
@permission_classes((AllowAny,))
def api_root(request, format=None):
    return Response(
        {
            "create_post": reverse(
                "create_post", request=request, format=format
            ),
            "comment_post": reverse(
                "comment_post", request=request, format=format
            ),
            "react_post": reverse(
                "react_post", request=request, format=format
            ),
            "post_list": reverse(
                "post_list", request=request, format=format
            ),
            "create_hackathon": reverse(
                "create_hackathon", request=request, format=format
            ),
            "get_hackathon": reverse(
                "get_hackathon", request=request, format=format
            ),
            "register_hackathon": reverse(
                "register_hackathon", request=request, format=format
            ),
            "registered_hackathon": reverse(
                "registered_hackathon", request=request, format=format
            )

        }
    )