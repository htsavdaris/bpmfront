import React, { useState, useEffect } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { processDefinitionService } from '../../services/ProcessDefinitionService';
import { Link } from "react-router-dom";

const styles = (theme: any) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});


const ProcessDefinitionList = () => {
    const [processDefinitions, setprocessDefinitions] = useState([]);

    useEffect(() => {
        processDefinitionService.getAll()
        .then((processDefinitions) => setprocessDefinitions(processDefinitions));
          
    }, []);

    return (
        <div>
            <h2>Process Definition List </h2>
            <div>
                <List className='flexContainer' sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', }}>
                    {
                        processDefinitions.map((procDef: any) => {
                            return (
                                <ListItem component={Link} to={`/ProcessDefinition/${procDef.id}`} alignItems="flex-start">
                                    <ListItemText
                                        primary={"Key:" + procDef.key}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    id: { procDef.id}  <br/>
                                                    Name: {procDef.name}  <br/>
                                                    Version : { procDef.version}  <br/>
                                                    versionTag : { procDef.versionTag}  <br/>
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    >

                                    </ListItemText>
                                </ListItem>
                            )
                        }
                        )}
                </List>
            </div>
        </div>

    );
}

export default ProcessDefinitionList;