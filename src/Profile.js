import React, { useEffect, useState } from "react";
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";  
import Container from "./Container";

const Profile = () => {
    useEffect(() => {
        checkUser()
    }, [])

    const [user, setUser] = useState({})

    const checkUser = async() => {
        try {
            const data = await Auth.currentUserPoolUser()
            const userInfo = {username: data.username, ...data.attributes}
            setUser(userInfo)
        } catch (err) { console.log('error: ', err)}
    }
    return (
        <Container>
            <h1>Profile</h1>
            <h2>UsernName: {user.username}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Phone: {user.phone_number}</h4>
            <button onClick={signOut}>Sign out</button>
        </Container>
    );
}

export default withAuthenticator(Profile)