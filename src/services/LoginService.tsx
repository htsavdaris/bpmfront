import axios from "axios";
import { axiosRequest } from './api';
import { ICredentials } from '../models/credentials';

export const LoginService = {
    login: async function (credentials: ICredentials) {
        try {
             
            const { data } = await axiosRequest.post('/oauth/authenticate', credentials
            {
                headers: { 'Content-Type': 'application/json' }
            })
            
            return data;
        }
        catch (error: any) {
            throw new Error(`Error in 'ProcessDefintionService():getAll': ${error.message}`);
        }
    },


}