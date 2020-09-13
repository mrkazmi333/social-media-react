import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  FETCH_USER_PROFILE,
} from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

export function startUserprofileFetch() {
  return {
    type: FETCH_USER_PROFILE,
  };
}
export function userProfileSuccess(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
}

export function userProfileFailure(error) {
  return {
    type: USER_PROFILE_FAILURE,
    error,
  };
}

export function fetchUserProfile(userId) {
  return (dispatch) => {
    dispatch(startUserprofileFetch());
    const url = APIUrls.userProfile(userId);
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(userProfileSuccess(data.data.user));
          return;
        }
        dispatch(userProfileFailure(data.message));
      });
  };
}
