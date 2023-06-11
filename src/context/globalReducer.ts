import { StateType } from './stateType';

export type AdjustmentAction = {
  type: 'USER_AUTHENTICATED' | 'USER_LOGIN' | 'SET_JWT_TOKEN' | 'SET_RENEW_TOKEN';
  payload: string;
};

export const globalReducer = (
  state: StateType,
  action: AdjustmentAction
): StateType => {
  if (action.type === 'USER_AUTHENTICATED') {
    return { ...state, isUserAuthenticated: true };
  }

  if (action.type === 'USER_LOGIN') {
    return { ...state, loggedUser: action.payload };
  }

  if (action.type === 'SET_JWT_TOKEN') {
    return { ...state, jwtToken: action.payload };
  }

  if (action.type === 'SET_RENEW_TOKEN') {
    return { ...state, jwtRenewToken: action.payload };
  }
  
  return state;
};
