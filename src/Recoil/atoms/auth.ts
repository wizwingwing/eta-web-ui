import { atom } from "recoil"

export interface LoginDto {
  email: string
  password: string
}

export interface registerDto {
  email: string
  password: string
  confirmPassword: string
}

export const loginState = atom({
  key: "login",
  default: {
    email: "",
    password: "",
  } as LoginDto,
})

export const registerState = atom({
  key: "register",
  default: {
    email: "",
    password: "",
    confirmPassword: "",
  } as registerDto,
})
