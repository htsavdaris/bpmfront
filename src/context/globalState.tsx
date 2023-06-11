import React, { createContext, useReducer } from 'react';
import { globalReducer, AdjustmentAction } from './globalReducer';
import { StateType } from './stateType';

interface StateContextType extends StateType {
    globalDispatch: React.Dispatch<AdjustmentAction>;
  }

  export const initialState:StateType = {
    isUserAuthenticated :false,
    loggedUser : "",
    jwtToken : "",
    jwtRenewToken : ""
  }

 
  export const GlobalContext = createContext<StateContextType>(initialState as StateContextType);

  export const GlobalProvider = ({ children }: {children: React.ReactNode; }) => {
    const [state, globalDispatch] = React.useReducer(globalReducer, {
        isUserAuthenticated :false,
        loggedUser : "",
        jwtToken : "",
        jwtRenewToken : ""
    });

    return(
        <GlobalContext.Provider value = {{...state, globalDispatch}} > 
          {children} 
        </GlobalContext.Provider>
     )

  } 