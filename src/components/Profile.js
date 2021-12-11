import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {

    const [profileName, setProfileName] =useState("");
    const [profileCell, setProfileCell] =useState("");
    const [profileImage, setProfileImage] =useState("");
    const [profileEmail, setProfileEmail] =useState("");

    const profileData = async () => {
        try {
            const res = await axios.get("https://localhost:4000/user/profile");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        profileData();
    }, [])

    return (
        <div>
            <h1>Hello User</h1>
        </div>
    )
}

export default Profile;
