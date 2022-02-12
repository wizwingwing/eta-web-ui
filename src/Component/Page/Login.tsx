import React from 'react'
import { TextFieldBase } from '../Element/CustomMaterial.element'
import { TextHeaderH1 } from '../Element/Fontsize.element'
import { BoxContent, BoxLogin, ButtonLogin, Container } from '../Element/Login.element'


  export const Login = () => {
    return (
      <Container>
        <BoxLogin>
          <TextHeaderH1 color={"#14FFEC"}>LOGIN</TextHeaderH1>
          <BoxContent>
            <TextFieldBase fullWidth label="Username" id="username" />
            <TextFieldBase style={{ marginTop: "1rem" }} fullWidth label="Password" id="password" />
          </BoxContent>
          <ButtonLogin>Login</ButtonLogin>
        </BoxLogin>
      </Container>
    )
  }