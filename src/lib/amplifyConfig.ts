const amplifyConfig = {
  "aws_project_region": "ap-northeast-1",
  "aws_cognito_region": "ap-northeast-1",
  "aws_user_pools_id": "ap-northeast-1_xxxxxxxxxxx",
  "aws_user_pools_web_client_id": "xxxxxxxxxxxxxxxxxxxxxxxx",
  "oauth": {
      "domain": "xxxxxxxxxxx.auth.ap-northeast-1.amazoncognito.com",
      "scope": ["openid", "email", "profile"],
      "redirectSignIn": "http://localhost:3000/dashboard",
      "redirectSignOut": "http://localhost:3000/login",
      "responseType": "token"
  }
};

export default amplifyConfig;
