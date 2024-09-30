// authSelectors.js

export const selectAuthToken = (state) => state.auth.token;

export const selectAuthUserId = (state) => state.auth.userId;

export const selectAuthStatus = (state) => state.auth.status;

export const selectAuthError = (state) => state.auth.error;

export const selectIsAuthenticated = (state) => !!state.auth.token;
