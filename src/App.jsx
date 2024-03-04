import Nevbar from "./Component/Nevbar/Nevbar"
import "./App.css"
import { MyButton } from "./Component/Nevbar/fullscreenModal/MobileModal"
import NevbarLinks from "./PracticeComponent/NevbarLink"
import Home from "./Component/Home-page/Home"
import MobileCart from "./Component/Section-1/MobileCart"
import { CollapseEx } from "./PracticeComponent/CollapseEx"
import Cartpage from "./Component/Section-2/Cartpage"
import Axios from "./Allpages/Axios"
import Loadding from "./Allpages/Loadding"
import AllSecComponent from "./AllSections/AllSecComponent"
import AllRoutes from "./AllRoutes/AllRoutes"

function App() {

  return (
    <>
    <Nevbar/>
    <AllRoutes/>
    </>
  )
}

export default App
