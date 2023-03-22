import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";
import CurrentMonth from "./pages/CurrentMonth";
import LastQuarter from "./pages/LastQuarter";
import YearEndSale from "./pages/YearEndSale";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/'element={<Dashboard/>}/>
            <Route path='/dashboard'element={<Dashboard/>}/>
            <Route path='/orders'element={<Orders/>}/>
            <Route path='/customers'element={<Customers/>}/>
            <Route path='/reports'element={<Reports/>}/>
            <Route path='/integrations'element={<Integrations/>}/>
            <Route path='/currentmonth'element={<CurrentMonth/>}/>
            <Route path='/lastquarter'element={<LastQuarter/>}/>
            <Route path='/yearendsale'element={<YearEndSale/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  )
}

export default App;