import { Route, Routes } from "react-router-dom"
import Home from './views/home/Home'
import Invoice from './views/invoice/Invoice'
import Heart from './views/heart/Heart'
import Wallet from "./views/wallet/Wallet"
import Setting from "./views/setting/Setting"
import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar"
import Layout from "./components/layout/Layout"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
          <Route path="/favorite" element={<Heart/>}/>
          <Route path="/wallet" element={<Wallet/>}/>
          <Route path="/settings" element={<Setting/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App