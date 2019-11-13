export const FETCH_ADS = 'FETCH_ADS'

export function fetchAds(ads){
    return {
        type: FETCH_ADS,
        payload: ads
    }
}

export const GET_SINGLE_AD = 'GET_SINGLE_AD'

export function getSingleAd(ad){
    return {
        type: GET_SINGLE_AD,
        payload: ad
    }
}

export const DELETE_AD = 'DELETE_AD'

export function deleteAd(ad){
    return {
        type: DELETE_AD,
        payload: ad
    }
}

export const CREATE_AD = 'CREATE_AD'

export function createAd(ad){
    return {
        type: CREATE_AD,
        payload: ad
    }
}

