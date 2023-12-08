import axios from "axios";

const ALLCONTACT="ALLCONTACT";

const objectinia={
    allcontact:[],
    singlecontact:{}
}

const contactReducer=(state=objectinia,action)=>{

    switch(action.type)
    {
        case "ALLCONTACT":
        return{
            ...state,
            allcontact:action.payload
        }

    }
    return state;
}

export default contactReducer;



const getcontact=(data)=>({
    type:ALLCONTACT,
    payload:data
})

export const fetchcontact=()=>{
    return function(dispatch){
        axios.get('http://localhost:3000/contact')
        .then((resp)=>{
            dispatch(getcontact(resp.data))
        })
    }
}