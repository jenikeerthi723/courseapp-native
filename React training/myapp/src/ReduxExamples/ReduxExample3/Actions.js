import * as actionTypes from './ActionTypes'

export const add_note = (title,content) => {
    
    return {
        type: actionTypes.ADD_NOTE,
        id: parseInt((Math.random() * 100000), 10),
        title : title, 
        content : content
    }
}

export const remove_note = (id) => {
    return {
        type: actionTypes.REMOVE_NOTE,
        notesId: id
    }
}

