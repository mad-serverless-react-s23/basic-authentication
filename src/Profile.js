import React, { useEffect, useState } from "react";
import { Auth } from 'aws-amplify';
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";  
import Container from "./Container";
import '@aws-amplify/ui-react/styles.css';

const Profile = () => {
    useEffect(() => {
        checkUser()
    }, []) //empty array means run this a single time when this loads

    const [user, setUser] = useState({})

    const checkUser = async() => {
        try {
            const data = await Auth.currentUserPoolUser()
            const userInfo = {username: data.username, ...data.attributes}
            //could add console.log(userInfo) to get what data is available if I don't know what it is
            setUser(userInfo)
        } catch (err) { console.log('error: ', err)}
    }
    return (
        <Container>
            <Authenticator>
                {({ signOut, userInfo }) => (
                    <main>
                        <h1>Profile</h1>
                        <h2>UsernName: {user.username}</h2>
                        <h3>Email: {user.email}</h3>

                        <button onClick={ signOut }>Sign Out</button>
                    </main>
                )} 
            </Authenticator>
        </Container>
    );
}

export default withAuthenticator(Profile)
//another options - same behavior either way: export default Profile