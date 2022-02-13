import React from 'react'
import { CheckboxRemember, FormLabel, TextFieldBase } from '../Element/CustomMaterial.element'
import { TextHeaderH1 } from '../Element/Fontsize.element'
import { BoxContent, BoxFooter, BoxLogin, ButtonLogin, Container, LinkForgotPassword, LinkSignUp } from '../Element/Login.element'
import { BiLogInCircle } from 'react-icons/bi';

export const Login = () => {
  return (
    <Container>
      <BoxLogin>
        <TextHeaderH1 color={"#14FFEC"}>LOGIN</TextHeaderH1>
        <BoxContent>
          <TextFieldBase fullWidth label="Username" id="username" />
          <TextFieldBase style={{ marginTop: "1rem" }} fullWidth label="Password" id="password" />
        </BoxContent>
        <BoxFooter>
          <FormLabel control={<CheckboxRemember sx={{ '& .MuiSvgIcon-root': { fontSize: 14 }}} />} label="Remember Me" />
          <LinkForgotPassword href="#" >Forgot Password</LinkForgotPassword>
        </BoxFooter>
        <ButtonLogin><BiLogInCircle style={{ marginRight: "0.5rem" }} />Login</ButtonLogin>
        <BoxFooter style={{display:"flex",justifyContent:"center"}} margin={"0 0 1rem 0"}>
          <LinkSignUp href="#" >You don't have an account? Signup!</LinkSignUp>
        </BoxFooter>
      </BoxLogin>
    </Container>
  )
}