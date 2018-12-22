import { LISTTASK } from '../actions/task'

const initialState = {
    listTask: [],

}

export default function (state = initialState, action) {
    switch (action.type) {
        case LISTTASK:
            return {
                ...state,
                listTask: action.listTask
            }

        default:
            return state
    }
}