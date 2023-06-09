import { Dispatch } from 'react';


export interface IStoreService {
    isUserAuthenticated: boolean;
    loggedUser: string;
    persistenceType: string;
    jwtToken :string;
    jwtRenewToken :string;
  }

  export type ActionType = {
    type: string;
    payload?: any;
  };
  
  export type ContextType = {
    globalState: IStoreService;
    dispatch: Dispatch<ActionType>;
  };