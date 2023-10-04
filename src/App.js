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
        "flex items-start",
        "text-slate-600",
      )}>
        <Sidebar />
        <div className={clsx(
          "ml-80 my-20"
        )}>
          {mainRouter}
        </div>
      </div>
    </>
  );
}

export default App;
