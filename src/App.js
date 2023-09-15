import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import router from "./Routes";

function App() {
  return (
    <>
      <Header />
      {router}
      <Sidebar />
    </>
  );
}

export default App;
