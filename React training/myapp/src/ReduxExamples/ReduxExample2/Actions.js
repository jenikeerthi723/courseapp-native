import * as actionTypes from './ActionTypes'

export const add_employee = (fname,lname) => {
    console.log(lname)
    return {
        type: actionTypes.ADDEMPLOYEE,
        id : parseInt((Math.random() * 100000), 10),
        fname : fname, 
        lname : lname
    }
}

export const delete_employee = (id) => {
    return {
        type: actionTypes.DELETEEMPLOYEE,
        empId: id
    }
}
