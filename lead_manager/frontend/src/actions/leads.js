import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/prospects/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE LEAD
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/prospects/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD LEAD
export const addLead = (prospect) => dispatch => {
    axios.post('/api/prospects/', prospect)
        .then(res => {
            dispatch(createMessage({ addLead: 'Lead Added' }));
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};