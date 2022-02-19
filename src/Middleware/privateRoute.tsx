import { Navigate } from "react-router-dom"
import AccessDenied from "../Component/Page/AccessDenied"
import { AppRoles } from "../Utils/roles"

interface Props {
  component: React.ComponentType
  path?: string
  roles: Array<AppRoles>
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
}) => {
  const accessToken: string | null = sessionStorage.getItem("accessToken")
  const userId = sessionStorage.getItem("id")
  const role = sessionStorage.getItem("roles") as AppRoles
  const isAuthenticated: boolean = accessToken ? true : false
  const userHasRequiredRole = userId && roles.includes(role) ? true : false

  if (isAuthenticated && userHasRequiredRole) {
    return <RouteComponent />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />
  }

  return <Navigate to="/login" />
}
