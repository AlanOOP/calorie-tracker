import { useReducer } from "react";
import { Activity } from "../types";

export type ActivityAction = {
    type: 'ADD_ACTIVITY' | 'REMOVE_ACTIVITY',
    payload: { newActivity: Activity }
}

type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState,
    action: ActivityAction
) => {
    if (action.type === 'ADD_ACTIVITY') {
        return {
            activities: [...state.activities, action.payload.newActivity]
        }
    }else if(action.type === 'REMOVE_ACTIVITY'){
        return {
            activities: state.activities.filter(activity => activity !== action.payload.newActivity)
        }
    }
}
