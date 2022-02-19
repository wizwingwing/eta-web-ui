import { atom } from "recoil"

export interface OpenSidebar {
  open: boolean
}

export const openSidebar = atom({
  key: "openSidebar",
  default: {
    open: false,
  } as OpenSidebar,
})
