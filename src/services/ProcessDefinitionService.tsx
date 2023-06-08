import axios from "axios";
import { axiosRequest } from './api';

export const processDefinitionService = {
    getAll: async function () {
        try {
             
            const { data } = await axiosRequest.get('/processdefinitioncontroller',
            {
                headers: { 'Content-Type': 'application/json' }
            })
            
            return data;
        }
        catch (error: any) {
            throw new Error(`Error in 'ProcessDefintionService():getAll': ${error.message}`);
        }
    },
    getById: async function (id?:string) {
        try {
            const response = await axiosRequest.get('/processdefinitioncontroller/id/' + id,
            {
                headers: { 'Content-Type': 'application/json' }
            })
            return response.data;
        }
        catch (error: any) {
            throw new Error(`Error in 'ProcessDefintionService():get': ${error.message}`);
        }
    },
    getByKey: async function (key?:string) {
        try {
            const response = await axiosRequest.get('/processdefinitioncontroller/key/' + key,
            {
                headers: { 'Content-Type': 'application/json' }
            })
            return response.data;
        }
        catch (error: any) {
            throw new Error(`Error in 'ProcessDefintionService():get': ${error.message}`);
        }
    }
    
}


