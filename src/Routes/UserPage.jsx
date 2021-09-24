import axios from 'axios';
import React from 'react'
import { useParams,useHistory } from 'react-router-dom'


export const UserPage = () => {
    const [user, setUser] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true)
    const {userId} = useParams();
    const history = useHistory();

    const getUserDetails = () =>{
        setIsLoading(true);
        axios.get(`https://reqres.in/api/users/${userId}`)
        .then(res=>{
            setUser(res.data.data);
            setIsLoading(false);
        })
        .catch(err=>{
            console.log('error', err);
            setIsLoading(false);
        })
    }

    React.useEffect(()=>{
        getUserDetails();
    },[])

    const handleGoBack = () => {

        if(history.length > 2)
        {
            history.go(-1);
        }
        else
        {
            history.push("/users")
        }
        
        //history.replace('/users)
    }

    return isLoading ? <div>..Loading</div> : (
        <>
        <div style={{display: 'flex', justifyContent: 'center',
        paddingTop: 20}}>
            {/* Show user {userId} */}
            <img src={user.avatar} alt="profile"/>
            <div>
                <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <br />
            <h4>{`Email : ${user.email}`}</h4>
            </div>
            
        </div>

        <button onClick={handleGoBack}>Go Back</button>

        </>
    
    )
}
