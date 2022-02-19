import { Navigate } from "react-router-dom"

interface Props {
  component: React.ComponentType
  path?: string
}

export const PublicRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const accessToken: string | null = sessionStorage.getItem("accessToken")
  const isAuthenticated: boolean = accessToken ? true : false

  if (!isAuthenticated) {
    return <RouteComponent />
  }

  return <Navigate to="/" />
}
