import Admin from "./pages/Admin"
import { Admin_Route } from "./utils/consts"

export const authRoutes = [
    {
        patch: Admin_Route,
        Component: Admin
    },
    {
        patch: Basket_Route,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        patch: SHOP_Route,
        Component: Shop
    },
    {
        patch: Login_Route,
        Component: Auth
    },
    {
        patch: Registration_Route,
        Component: Auth
    },
    {
        patch: Device_Route + '/:id',
        Component: DevicePage
    }
 
]