import React from 'react'
import { BiLogInCircle } from 'react-icons/bi'
import { TextFieldBase } from '../Element/CustomMaterial.element'
import { TextHeaderH1 } from '../Element/Fontsize.element'
import { ButtonLogin, LinkSignUp } from '../Element/Login.element'
import { BoxContent, BoxFooter, BoxRegister, Container} from '../Element/Register.element'

export default function Register() {
  return (
    <Container>
      <BoxRegister>
        <TextHeaderH1 color={"#14FFEC"}>Register</TextHeaderH1>
        <BoxContent>
          <TextFieldBase fullWidth label="Email" id="username" />
          <TextFieldBase style={{ marginTop: "1rem" }} fullWidth label="Password" id="password" />
          <TextFieldBase style={{ marginTop: "1rem" }} fullWidth label="Confirm Password" id="confirmPassword" />
        </BoxContent>
        <ButtonLogin><BiLogInCircle style={{ marginRight: "0.5rem" }} />Register</ButtonLogin>
        <BoxFooter style={{ display: "flex", justifyContent: "center" }} margin={"0 0 1rem 0"}>
          <LinkSignUp to="/login" >Go to Login</LinkSignUp>
        </BoxFooter>
      </BoxRegister>
    </Container>
  )
}
