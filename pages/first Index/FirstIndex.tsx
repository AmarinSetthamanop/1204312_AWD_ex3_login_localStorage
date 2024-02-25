import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FirstIndex() {

    const navigate = useNavigate();

    const [textUsername, setTextUsername] = useState('');
    const [textPassword, setTextPassword] = useState('');

    useEffect(() => {

        // const setValue = () => {
        //     setTextUsername(JSON.parse(localStorage.getItem('user')!)['username']);
        //     setTextPassword(JSON.parse(localStorage.getItem('user')!)['password']);
        // }

        // setValue();

        // localStorage('user') ไม่เป็น null ใช่หรือไม่
        // ถ้าไม่ใช่ null แสดงว่าเคย login ดังนั้นก็ให้ไปหน้า home
        if ( localStorage.getItem('user') !== null ) {
            setTextUsername(JSON.parse(localStorage.getItem('user')!)['username']);
            setTextPassword(JSON.parse(localStorage.getItem('user')!)['password']);
            // ถ้าเคย login ให้ไปหน้า home
        if (textUsername !== '' && textPassword !== ''  || textUsername !== null && textPassword !== null) {
                navigate('/home');
                console.log('yes')
            } else { // ถ้าไม่เคย login ให้ไปหน้า login
                navigate('/login');
                console.log('no in')
            }
            // navigate('/home');
        } else { // ถ้า localStorage('user') เป็น null แสดงว่า ไม่เคย login หรือ เคย logout มาก่อน ก็จะให้ไปหน้า login
            navigate('/login');
            console.log('no out')
        }

        // console.log(JSON.parse(localStorage.getItem('user')!))
        // console.log('firstIndex started...')
    }, [navigate, textPassword, textUsername]);
    // ใส่ dependencies ให้กับ useEffect เพื่อให้มันรู้ว่าจะต้อง กำหนดค่าอะไร หรือ ให้ทำอะไร [navigate, textPassword, textUsername]

    function routerToPage() {
        return <>
            <p>Username: {textUsername}</p>
            <p>Password: {textPassword}</p>
        </>;
    }

    return (<>
    <p>First Index</p>
        {routerToPage()}
    </>);
}