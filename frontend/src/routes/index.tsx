// import { useAuthConsumer } from "../authProvider"
import { ProtectedRootRoute } from "./ProtectedRootRoute"
import ErrorPage from "../pages/error-page"
import { Vendors } from "../features/vendors/Vendors"
import FoodMap from "../features/foodMap/FoodMap"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Logout from "../pages/Logout"
import { useAppSelector } from "../app/hooks"

export const Routes = () => {
  // const { token } = useAuthConsumer()
  // console.log("token de done?", token)

  const { user } = useAppSelector((state: { auth: any }) => state?.auth)

  // routes
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRootRoute />,
      errorElement: <ErrorPage />,
      // loader: rootLoader,
      // action: rootAction,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "vendors",
          element: <Vendors />,
        },
        {
          path: "foodMap",
          element: <FoodMap />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
        // {
        //   path: "contacts/:contactId",
        //   element: <Contact />,
        //   loader: contactLoader,
        // },
      ],
    },
  ]

  // routes
  const routesForPublic = [
    // {
    //   path: "home",
    //   element: <Home />,
    // },
    {
      path: "about-us",
      element: <div>About Us</div>,
    },
  ]

  // routes
  const routesForNotAuthenticatedOnly = [
    {
      path: "login",
      element: <Login />,
    },
  ]

  console.log("!user", !user, "routes returned", [
    // ok
    ...routesForPublic,

    // if there is a token then empty array (nada)
    // if there is no token then spread the routesNotAuthOnly
    ...(!!user ? [] : routesForNotAuthenticatedOnly),

    // curious, token or no token we enable these routes hmm?
    ...routesForAuthenticatedOnly,
  ])

  return [
    // ok
    ...routesForPublic,

    // if there is a token then empty array (nada)
    // if there is no token then spread the routesNotAuthOnly
    ...(!!user ? [] : routesForNotAuthenticatedOnly),

    // curious, token or no token we enable these routes hmm?
    ...routesForAuthenticatedOnly,
  ]
}

export default Routes
