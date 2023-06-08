import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import Typography from '@mui/material/Typography';
import { processDefinitionService } from '../../services/ProcessDefinitionService';
import { Link } from "react-router-dom";
import  ProcessDefintionModel  from '../../models/processDefinitionModel';
import { key } from 'localforage';

const ProcessDefintion = () => {
    const { id } = useParams();
    const [processDefinition, setprocessDefinition] = useState<ProcessDefintionModel>();
    

    useEffect(() => {
        processDefinitionService.getById(id)
        .then((processDefinition) => {
            setprocessDefinition(processDefinition);
            console.log (processDefinition);
        });
    }, []);

    return(
        <div>
            Process Code {id} <br/>
            Key: { processDefinition?.key  } <br/>
            Name: { processDefinition?.name  } <br/>
            Version: { processDefinition?.version  } <br/>
            Version Tag: { processDefinition?.versionTag  } <br/>

        </div>
    )
}

export default ProcessDefintion;