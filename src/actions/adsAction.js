export const FETCH_ADS = 'FETCH_ADS'

export function fetchAds(ads){
    return {
        type: FETCH_ADS,
        payload: ads
    }
}

export const CREATE_AD = 'CREATE_AD'

export function createAd(ad){
    return {
        type: CREATE_AD,
        payload: ad
    }
}
