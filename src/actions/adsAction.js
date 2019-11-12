export const FETCH_ADS = 'FETCH_ADS'

export function fetchAds(ads){
    return {
        type: FETCH_ADS,
        payload: ads
    }
}
