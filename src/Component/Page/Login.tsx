import { CheckboxRemember, FormLabel, TextFieldBase } from '../Element/CustomMaterial.element'
import { TextHeaderH1 } from '../Element/Fontsize.element'
import { BoxContent, BoxFooter, BoxLogin, ButtonLogin, Container, LinkForgotPassword, LinkSignUp } from '../Element/Login.element'
import { BiLogInCircle } from 'react-icons/bi';
import { useRef, useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const homeRef = useRef<HTMLAnchorElement>(null)

  const handleClick = async () => {

    const headers = { "content-type": "application/json"}
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
      email,
      password
    }, { headers })

    console.log(result)
  }

  return (
    <Container>
      <BoxLogin>
        <TextHeaderH1 color={"#14FFEC"}>LOGIN</TextHeaderH1>
        <BoxContent>
          <TextFieldBase fullWidth label="Username" id="username" onChange={e => setEmail(e.target.value)} />
          <TextFieldBase style={{ marginTop: "1rem" }} fullWidth label="Password" id="password" onChange={e => setPassword(e.target.value)} />
        </BoxContent>
        <BoxFooter>
          <FormLabel control={<CheckboxRemember sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} />} label="Remember Me" />
          <LinkForgotPassword href="#" >Forgot Password</LinkForgotPassword>
        </BoxFooter>
        <ButtonLogin onClick={handleClick}><BiLogInCircle style={{ marginRight: "0.5rem" }} />Login</ButtonLogin>
        <LinkSignUp ref={homeRef} style={{ display: "none" }} to="/" />
        <BoxFooter style={{ display: "flex", justifyContent: "center" }} margin={"0 0 1rem 0"}>
          <LinkSignUp to="/register" >You don't have an account? Signup!</LinkSignUp>
        </BoxFooter>
      </BoxLogin>
    </Container>
  )
}

export default Login