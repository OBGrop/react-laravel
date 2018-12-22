export const LISTTASK = 'LISTTASK'

export const setListTask = (listTask) => dispatch => {
    dispatch({
        type: LISTTASK,
        listTask
    })
};