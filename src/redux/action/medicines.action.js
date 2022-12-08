import { deleteMedicineData, getAllMedicinesData, postMedicineData, putMedicineData } from '../../common/apis/medicines.api';
import { BASE_URL } from '../../shared/baseUrl';
import * as ActionTypes from '../ActionTypes';

export const getMedicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())

        setTimeout(function () {
            getAllMedicinesData()
                .then((data) => dispatch({ type: ActionTypes.GET_MEDICINES, payload: data.data }))
                .catch((error) => dispatch(errorMedicines(error.message)))
            // fetch(BASE_URL + 'medicines')
            //     .then(response => {
            //         if (response.ok) {
            //             return response;
            //         } else {
            //             var error = new Error('Something went wrong:  ' + response.status + ': ' + response.statusText);
            //             error.response = response;
            //             throw error;
            //         }
            //     },
            //         error => {
            //             var errmess = new Error(error.message);
            //             throw errmess;
            //         })
            //     .then((response) => response.json())
            //     .then((data) => dispatch({ type: ActionTypes.GET_MEDICINES, payload: data }))
            //     .catch((error) => dispatch(errorMedicines(error.message)))
        }, 2000);

    } catch (error) {
        dispatch(errorMedicines(error.message))
    }
}

export const addMedicine = (data) => (dispatch) => {
    try {
        postMedicineData(data)
            .then((data) => dispatch({ type: ActionTypes.ADD_MEDICINES, payload: data.data }))
            .catch((error) => dispatch(errorMedicines(error.message)))
        // fetch(BASE_URL + 'medicines', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             return response;
        //         } else {
        //             var error = new Error('Something went wrong:  ' + response.status + ': ' + response.statusText);
        //             error.response = response;
        //             throw error;
        //         }
        //     },
        //         error => {
        //             var errmess = new Error(error.message);
        //             throw errmess;
        //         })
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionTypes.ADD_MEDICINES, payload: data }))
        //     .catch((error) => dispatch(errorMedicines(error.message)))
    } catch (error) {
        dispatch(errorMedicines(error.message))
    }
}

export const deleteMedicine = (id) => (dispatch) => {
    try {
        deleteMedicineData(id)
            .then(dispatch({type: ActionTypes.DELETE_MEDICINES, payload: id}))
            .catch((error) => dispatch(errorMedicines(error.message)))
        // fetch(BASE_URL + 'medicines/' + id, {
        //     method: 'DELETE'
        // })
        // .then(response => {
        //     if (response.ok) {
        //         return response;
        //     } else {
        //         var error = new Error('Something went wrong:  ' + response.status + ': ' + response.statusText);
        //         error.response = response;
        //         throw error;
        //     }
        // },
        //     error => {
        //         var errmess = new Error(error.message);
        //         throw errmess;
        //     })
        // .then((response) => response.json())
        // .then(dispatch({type: ActionTypes.DELETE_MEDICINES, payload: id}))
        // .catch((error) => dispatch(errorMedicines(error.message)))
    } catch (error) {
        dispatch(errorMedicines(error.message))
    }
}

export const updateMedicine = (data) => (dispatch) => {
    try{
        putMedicineData(data)
            .then((data) => dispatch({type: ActionTypes.UPDATE_MEDICINES, payload: data.data}))
            .catch((error) => dispatch(errorMedicines(error.message)))
    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const loadingMedicines = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOADING_MEDICINES })
}

export const errorMedicines = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_MEDICINES, payload: error })
}