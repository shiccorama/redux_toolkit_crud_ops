import axios from "axios";
import  { startUser, successUser, errorUser } from "../redux/userSlice";

export const postUser = async (user, dispatch) => {
    dispatch(startUser());

    try{
        const response = await axios.post("http//localhost:5000/api/users", user);
        dispatch(successUser(response.data));
    }catch(error){
        dispatch(errorUser());
    }

}
