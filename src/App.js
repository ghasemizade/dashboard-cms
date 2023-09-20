import Sidebar from "./components/Sidebar";
import routers from "./routes"
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import clsx from "clsx";


function App() {

  let router = useRoutes(routers)

  return (
    <>
      <Header />
      <div className={clsx(
        "flex",
      )}>
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
