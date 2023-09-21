import Sidebar from "./components/Sidebar";
import routersPath from "./routes"
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import clsx from "clsx";


function App() {

  let mainRouter = useRoutes(routersPath)

  return (
    <>
      <Header />
      <div className={clsx(
        "flex"
      )}>
        <Sidebar />
        {mainRouter}
      </div>
    </>
  );
}

export default App;
