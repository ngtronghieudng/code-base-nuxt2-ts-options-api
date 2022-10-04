const common = {
  ACCESS_TOKEN_KEY: 'access_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  STATUS_CODE: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    PAGE_NOT_FOUND: 404,
    SYSTEM_ERROR: 500,
  },
  REGEX: {
    ALPHANUMERIC: /^[A-Za-z0-9#?!@$%^&*_-]+$/,
    URL: /^(http:\/\/|https:\/\/)[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\(\\)\\*\\+,;=.]+$/,
    EMAIL:
      /^[a-zA-Z]+([+._-]?[a-zA-Z\d]+)+@[a-z\d]+[-]?[a-z\d]+(\.[a-z]{2,})+$/,
    IP: /^(http:\/\/|https:\/\/)[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\(\\)\\*\\+,;=.]|(\d{1,3}\.){1,3}\*|(([01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}([01]?\d{1,2}|2[0-4]\d|25[0-5])$/,
    PASSWORD: /^.+$/,
    INPUT_106: /^[a-z0-9;\\/?:@=+$,-_.!~*'()%#\\[\]]+$/,
    SUB_DOMAIN: /^[A-Za-z0-9.-]+$/,
    CONVERSION_ID: /^[A-Za-z0-9_-]+$/,
    PHONE: /^(?:\d{10}|\d{3}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/,
  },
}

export default common
