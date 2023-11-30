const USER_TOKENS:any = {
  TOKEN: { name: 'token', cacheKey: 'token' },
  XSRF: { name: 'xsrf', cacheKey: 'xsrf' },
  REFRESH_TOKEN: { name: 'refreshToken', cacheKey: 'refreshToken' },
  REFRESH_TOKEN_EXPIRE_TIME: {
    name: 'token_expiration',
    cacheKey: 'refreshTokenExpireTime',
  },
};

const CACHED_ITEMS = {
  RETRY_COUNT: 'retryCount',
  USER_INFO: 'userInfo',
};

const getFromCache:any = (key:any) => {
  try {
     // @ts-ignore 
    return JSON.parse(window.localStorage.getItem(key) || null);
  } catch {
    return null;
  }
};

const setToCache = (key:string, value:any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

const removeFromCache = (key:any) => {
  try {
    window.localStorage.removeItem(key);
  } catch {}
};

// USER TOKENS
function setUserTokens(tokens:any) {
  for (const token in USER_TOKENS) {
    const userToken = USER_TOKENS[token];
    window.localStorage.setItem(
      userToken.cacheKey,
      tokens[userToken.name] || ''
    );
  }
}

function clearUserTokens() {
  for (const token in USER_TOKENS) {
    window.localStorage.removeItem(USER_TOKENS[token].cacheKey);
  }
}

//  Token
function getToken() {
  return getFromCache(USER_TOKENS.TOKEN.cacheKey);
}
function setToken(token:any) {
  setToCache(USER_TOKENS.TOKEN.cacheKey, token);
}
function clearToken() {
  removeFromCache(USER_TOKENS.TOKEN.cacheKey);
}

// Refresh token
function getRefreshToken() {
  return getFromCache(USER_TOKENS.REFRESH_TOKEN.cacheKey);
}
function setRefreshToken(refreshToken:any) {
  setToCache(USER_TOKENS.REFRESH_TOKEN.cacheKey, refreshToken);
}
function clearRefreshToken() {
  removeFromCache(USER_TOKENS.REFRESH_TOKEN.cacheKey);
}

// User info
function getUserInfo() {
  return getFromCache(CACHED_ITEMS.USER_INFO) || {};
}
function setUserInfo(userInfo:any) {
  setToCache(CACHED_ITEMS.USER_INFO, userInfo);
}
function clearUserInfo() {
  removeFromCache(CACHED_ITEMS.USER_INFO);
}

const cacheHelper = {
  setUserTokens,
  clearUserTokens,
  getToken,
  setToken,
  clearToken,
  getRefreshToken,
  setRefreshToken,
  clearRefreshToken,
  getUserInfo,
  setUserInfo,
  clearUserInfo,
};

export default cacheHelper;
