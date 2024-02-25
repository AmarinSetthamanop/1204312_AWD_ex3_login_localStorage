import "../login page/loginPage.css";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SendIcon from '@mui/icons-material/Send';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Box, Button, Container, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const [textUsername, setTextUsername] = useState('');
    const [textPassword, setTextPassword] = useState('');
    //===================================================================================
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setTextUsername(JSON.parse(localStorage.getItem('user')!)['username'])!;
            setTextPassword(JSON.parse(localStorage.getItem('user')!)['password'])!;
        } else {
            setTextUsername('')
            setTextPassword('')
        }
        console.log('\nusername: '+ textUsername + 
                    '\npassword: '+ textPassword + '\n');
        console.log(JSON.parse(localStorage.getItem('user')!));
        console.log('useEffect is startes...\n');
    }, [textPassword, textUsername]);
    // ใส่ dependencies ให้กับ useEffect เพื่อให้มันรู้ว่าจะต้อง กำหนดค่าอะไร หรือ ให้ทำอะไร [textPassword, textUsername]
    //====================================================================================
    function btnLogin() {
        console.log('\nusername: '+ userNameRef.current?.value + 
                    '\npassword: '+ passwordRef.current?.value + '\n');

        if ( userNameRef.current?.value !== '' && passwordRef.current?.value !== '') {

            const json = {
                'username': userNameRef.current?.value,
                'password': passwordRef.current?.value,
            }
            // สร้าง localStorage ที่เป็นแบบ json โดยกำหนด key คือ user และ value คือ json...
            localStorage.setItem('user', JSON.stringify(json));
    
            setTextUsername(JSON.parse(localStorage.getItem('user')!)['username']);
            setTextPassword(JSON.parse(localStorage.getItem('user')!)['password']);

            navigate('/home');
        } else {
            console.log('enter your Data!!');
        }
    }
    //===================================================================================
    function btnSingin() {

        console.log('\nUsername: ' + textUsername);
        console.log('Password: ' + textPassword);
        textUsername
            ? console.log('username is not null')
            : console.log('username is null')
        textPassword
            ? console.log('password is not null')
            : console.log('password is null')
    }
    //======================================================================================
    return (
        <Container fixed>
            <Box className='box'>
                <div>
                    <div className="head">
                        <LockOpenIcon />
                        <p>Login to my system</p>
                    </div>

                    Please enter Username and Password

                    <div className="input">
                        <TextField id="filled-basic" label="Username" variant="filled" inputRef={userNameRef} />
                        <TextField id="filled-basic" label="Username" variant="filled" inputRef={passwordRef} />
                    </div>

                    <div className="button">
                        <Button variant="contained" startIcon={<HowToRegIcon />} onClick={btnSingin}>
                            singup
                        </Button>
                        <Button variant="contained" color="success" endIcon={<SendIcon />} onClick={btnLogin}>
                            Login
                        </Button>
                    </div>
                    <p>Username: {textUsername}</p>
                    <p>Password: {textPassword}</p>
                </div>
            </Box>
        </Container>
    );
}
