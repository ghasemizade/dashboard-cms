import Sidebar from "./components/Sidebar";
import routersPath from "./Routes"
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import clsx from "clsx";


function App() {

  let mainRouter = useRoutes(routersPath)

  return (
    <>
      <Header />
      <div className={clsx(
        "flex items-start"
      )}>
        <Sidebar />
        {mainRouter}
      </div>
    </>
  );
}

export default App;
