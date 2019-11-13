import { FETCH_ADS, CREATE_AD } from "../actions/adsAction"

export default (state=[], action={}) => {
    switch (action.type){
        case FETCH_ADS:
            return action.payload
        case CREATE_AD:
            return [...state,
            {...action.payload}]
        default:
            return state
    }
}