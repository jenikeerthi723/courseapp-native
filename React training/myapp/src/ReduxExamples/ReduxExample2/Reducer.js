import * as actionTypes from './ActionTypes'

const initialState = {
    emps: []
};

const reducer = ( state = initialState, action ) => {
    console.log('type'+action.type)
    switch ( action.type ) {
        case actionTypes.ADDEMPLOYEE :
            const newEmployee = {
                id: action.id, 
                fname: action.fname,
                lname: action.lname
            }
            return {
                ...state,
                emps: state.emps.concat( newEmployee )
            }
        case actionTypes.DELETEEMPLOYEE :
            return {
                ...state,
                emps: state.emps.filter(emp => emp.id !== action.empId)
            }
        default :
            return state
    }
};

export default reducer;