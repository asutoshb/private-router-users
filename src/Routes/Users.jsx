import React from 'react'
import {Link,useLocation} from 'react-router-dom';
import axios from 'axios';

export const Users = () => {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const location = useLocation();

    console.log(location);

    const getPage = () => {
        const query = new URLSearchParams(location.search);
        const page = query.get('page') || 1;
        return page;
    }

    const fetchUsers = () => {

        const page = getPage();

        setIsLoading(true);
        axios.get('https://reqres.in/api/users',{
            params:{
                page
            }
        })
        .then(res=>{
            setUsers(res.data.data)
            setIsLoading(false)
        })
        .catch(err=>{
            console.log('error',err)
            setIsLoading(false)
        })
        
    }

    React.useEffect(()=>{
        fetchUsers();
    },[])

    return isLoading ? <div>...Loading</div> : (
        <>
            <h3>
                Users   
            </h3>
            {
                users.map(user=>(
                    <div key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            {`${user.first_name} ${user.last_name}`}
                        </Link>
                        <br/>
                    </div>
                ))
            }
        </>
      
    )
}
