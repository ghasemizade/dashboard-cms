import Home from "./pages/Home";
import Analaytics from "./pages/Analaytics";
import Sales from "./pages/Sales";
import Users from "./pages/Users";
import Newusers from "./pages/Newusers";
import Products from "./pages/Products";


let routes = [
    { 
      path:"dashboard-cms/",
      element: <Home />
    },
    { 
      path:"dashboard-cms/analytics",
      element: <Analaytics />
    },
    { 
      path:"dashboard-cms/sales",
      element: <Sales />
    },
    { 
      path:"dashboard-cms/users",
      element: <Users />
    },
    { 
      path:"dashboard-cms/newusers",
      element: <Newusers />
    },
    { 
      path:"dashboard-cms/products",
      element: <Products />
    },
  ]

export default routes