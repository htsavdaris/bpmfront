import axios from "axios";
import { axiosRequest } from './api';
import { ICredentials } from '../models/credentials';

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
            console.log(data);
            console.log(status);
            return data;
        }
        catch (error: any) {
            throw new Error(`Error in 'LoginService:login': ${error.message}`);
        }
    },


}