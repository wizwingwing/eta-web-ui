import {
  CheckboxRemember,
  FormLabel,
  TextFieldBase,
} from "../Element/CustomMaterial.element"
import { TextHeaderH1 } from "../Element/Fontsize.element"
import {
  BoxContent,
  BoxFooter,
  BoxLogin,
  ButtonLogin,
  Container,
  LinkForgotPassword,
  LinkSignUp,
} from "../Element/Login.element"
import { BiLogInCircle } from "react-icons/bi"
import { useRef } from "react"
import { useRecoilState } from "recoil"
import { LoginDto, loginState } from "../../Recoil/atoms/auth"
import { useNavigate } from "react-router-dom"
import * as ajax from "../../Utils/ajax"

const Login: React.FunctionComponent = () => {
  const homeRef = useRef<HTMLAnchorElement>(null)
  const btnSubmit = useRef<HTMLButtonElement>(null)
  const [user, setUser] = useRecoilState(loginState)
  const navigate = useNavigate()

  const handleLogin = async () => {
    const result = await ajax
      .login(user as LoginDto)
      .then((result) => result)
      .catch((error) => error)
    if (result.id) {
      navigate("/")
      window.location.reload()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const elementValue = e.target.value
    const elementName = e.target.name
    setUser({ ...user, [elementName]: elementValue })
  }

  const handleKeywordKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      btnSubmit.current?.click()
    }
  }

  return (
    <Container>
      <BoxLogin>
        <TextHeaderH1 color={"#14FFEC"}>LOGIN</TextHeaderH1>
        <BoxContent onSubmit={handleLogin}>
          <TextFieldBase
            value={user.email}
            fullWidth
            type="email"
            label="Email"
            name="email"
            onChange={handleChange}
            onKeyPress={handleKeywordKeyPress}
          />
          <TextFieldBase
            style={{ marginTop: "1rem" }}
            fullWidth
            type="password"
            label="Password"
            name="password"
            onChange={handleChange}
            onKeyPress={handleKeywordKeyPress}
          />
          <BoxFooter>
            <FormLabel
              control={
                <CheckboxRemember
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }}
                />
              }
              label="Remember Me"
            />
            <LinkForgotPassword href="#">Forgot Password</LinkForgotPassword>
          </BoxFooter>
          <ButtonLogin ref={btnSubmit} type="submit" onClick={handleLogin}>
            <BiLogInCircle style={{ marginRight: "0.5rem" }} />
            Login
          </ButtonLogin>
        </BoxContent>

        <LinkSignUp ref={homeRef} style={{ display: "none" }} to="/home" />
        <BoxFooter
          style={{ display: "flex", justifyContent: "center" }}
          margin={"0 0 1rem 0"}
        >
          <LinkSignUp to="/register">
            You don't have an account? Signup!
          </LinkSignUp>
        </BoxFooter>
      </BoxLogin>
    </Container>
  )
}

export default Login
