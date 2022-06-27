import { Constants } from "../Utilities/Constants"

export const getVideoLabels = async() =>{
    try{
        const response = await fetch(Constants.VIDEOSURL,{
        method:'get',
        headers: {
            'Content-type': 'application/json',
        } 
    });

    let jsonResponse = await response.json();

    return jsonResponse;
    }catch(error){
        return null;
        
    }
}