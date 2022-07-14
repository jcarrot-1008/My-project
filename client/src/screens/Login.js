import React , {useState, useContext, useRef, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Logo, PopupBoxObject, ShadowedBox} from '../components/Styles/Container/Container.styled'
import CheckModal from '../components/util/CheckModal'
import { MainContext } from '../components/context/mainContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = ({ target: { value } }) => setUsername(value);
    const handlePasswordChange = ({ target: { value } }) => setPassword(value);

    const { onModal } = useContext(MainContext);
    
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    
    const title = '환영합니다.'
    const description ='로그인에 성공하였습니다.'
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        fetch('http://localhost:3030/auth/signin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(res => res.json()).then(res => {
        if(!!res.accessToken) {
            localStorage.setItem('jwt-token', res.accessToken);
            onModal()
        }
    })
}
  return (
    <>
    <PopupBoxObject>
        <ShadowedBox>
            <Form onSubmit={handleSubmit}>
            <Logo>
                <Logo>June Site</Logo>
            </Logo>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>USERNAME</Form.Label>
                <Form.Control 
                ref={inputRef}
                type="username" 
                value={username}  
                onChange={handleUsernameChange}
                placeholder="Enter your Id" />
                <Form.Text className="text-muted">
                We'll never share your username with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control 
                type="password" 
                value={password} 
                onChange={handlePasswordChange}
                placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </ShadowedBox>
        
    </PopupBoxObject>
    <CheckModal title={title} description={description} />
    </>
  )
}

export default Login