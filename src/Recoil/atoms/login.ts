import { atom } from "recoil"

export interface LoginDto {
  email: string
  password: string
}

export const loginState = atom({
  key: "login",
  default: {
    email: "",
    password: "",
  } as LoginDto,
})
