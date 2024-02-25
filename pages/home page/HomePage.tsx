import '../home page/homeOage.css'
import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const navigate = useNavigate();

    const [textUsername, setTextUsername] = useState('');
    const [textPassword, setTextPassword] = useState('');

    useEffect(() => {

        setTextUsername(JSON.parse(localStorage.getItem('user')!)['username'])!;
        setTextPassword(JSON.parse(localStorage.getItem('user')!)['password'])!;

        console.log(JSON.parse(localStorage.getItem('user')!));
    }, [textUsername, textPassword]);
    //========================================================================================
    function btnLogout() {
        localStorage.removeItem('user'); // ลบข้อมูลทั้งหมดที่อยู่ใน key user ของ localStorage
        navigate('/login'); // กลับไปหน้า login
    }
    
    return(<>
        <Container fixed>
            <div className="body">
                <p>Now! you are logined...</p>
                <Button variant="outlined" color="error" onClick={btnLogout}>
                    logout
                </Button>
                <p>Username: {textUsername}</p>
                <p>Password: {textPassword}</p>
            </div>
        </Container>
    </>);
}