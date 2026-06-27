import React, { useState } from "react";
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
function HomeComponent(){

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    let handleJoinVideoCall = async () => {
        navigate(`/${meetingCode}`)
    }

    return(
        <div className="navBar">
            <div style={{display:"flex", alignItems:"center"}}>
                <h3></h3>
            </div>
        </div>
    )
}
export default withAuth(HomeComponent)