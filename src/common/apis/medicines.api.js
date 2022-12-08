import { deleteRequest, getRequest, postRequest, putRequest } from "../request"


export const getAllMedicinesData = () => {
    return getRequest('medicines');
}

export const postMedicineData = (data) => {
    return postRequest('medicines', data)
}

export const deleteMedicineData = (id) => {
    return deleteRequest('medicines/', id)
}

export const putMedicineData = (data) => {
    return putRequest('medicines/', data)
}