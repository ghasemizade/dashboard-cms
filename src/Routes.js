import Home from "./pages/Home";
import Analaytics from "./pages/Analaytics";
import Sales from "./pages/Sales";
import Users from "./pages/Users";
import Newusers from "./pages/Newusers";
import Products from "./pages/Products";


let routes = [
    { 
      path:"/",
      element: <Home />
    },
    { 
      path:"/analytics",
      element: <Analaytics />
    },
    { 
      path:"/sales",
      element: <Sales />
    },
    { 
      path:"/users",
      element: <Users />
    },
    { 
      path:"/newusers",
      element: <Newusers />
    },
    { 
      path:"/products",
      element: <Products />
    },
  ]

export default routes