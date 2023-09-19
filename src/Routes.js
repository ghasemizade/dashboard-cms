import Home from "./pages/Home";
import Analaytics from "./pages/Analaytics";
import Sales from "./pages/Sales";
import Users from "./pages/Users";
import Newusers from "./pages/Newusers";
import Products from "./pages/Products";


let routes = [
    { 
      path:"/",
      elements: <Home />
    },
    { 
      path:"/analytics",
      elements: <Analaytics />
    },
    { 
      path:"/sales",
      elements: <Sales />
    },
    { 
      path:"/users",
      elements: <Users />
    },
    { 
      path:"/newusers",
      elements: <Newusers />
    },
    { 
      path:"/products",
      elements: <Products />
    },
  ]

  export default routes