import { FETCH_ADS, CREATE_AD, GET_SINGLE_AD, DELETE_AD } from "../actions/adsAction"

export default (state=[], action={}) => {
    switch (action.type){
        case FETCH_ADS:
            return action.payload
        case GET_SINGLE_AD:
            return [...state,
            {TheOneAd: action.payload}]
        case CREATE_AD:
            return [...state,
            {...action.payload}]
        case DELETE_AD:
            return state.filter(ad => ad.id !== action.payload.id)
        default:
            return state
    }
}