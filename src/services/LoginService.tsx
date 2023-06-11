import { Dispatch, useContext } from 'react';
import axios from "axios";
import { axiosRequest } from './api';
import { ICredentials } from '../models/credentials';
import { GlobalContext } from '../context/globalState';
import { AdjustmentAction } from '../context/globalReducer';
import { StateType } from '../context/stateType';

interface ColorSlidersProps extends StateType {
    globalDispatch: Dispatch<AdjustmentAction>;
  }

  export const ColorSliders = () => {
    const { isUserAuthenticated ,loggedUser,jwtToken,jwtRenewToken, globalDispatch } = useContext(GlobalContext);

    const userAuthenticated = (user:string, jwtToken:string) => {
        globalDispatch({ type: 'USER_AUTHENTICATED', payload: "true" });
        globalDispatch({ type: 'USER_LOGIN', payload: user });
        globalDispatch({ type: 'SET_JWT_TOKEN', payload: jwtToken });
      };
  }
  
export const LoginService = {
       
    login: async function (credentials: ICredentials) {
        try {
           
              
            const { data, status } = await axiosRequest.post('/oauth/authenticate', credentials,
            {
                headers: { 'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin':'*' }
            });
            // .then(function (response) {
            //     console.log(response);
            // });
            
            console.log(data.access_token);
            console.log(status);
            
            return data;
        }
        catch (error: any) {
            throw new Error(`Error in 'LoginService:login': ${error.message}`);
        }
    },


}