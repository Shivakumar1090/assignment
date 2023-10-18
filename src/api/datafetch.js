import axios from "axios";
import BASE_URL from "./common";

export const DataFetch = () => async (dispatch) =>{
    try {
        const {data} = await axios.get(BASE_URL);
        console.log(data);
        dispatch({type: 'SET_DATA' , payload: data});
    } catch (error) {
        console.log(error);
        window.alert("Something error happened");
    }
}