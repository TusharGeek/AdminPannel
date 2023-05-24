import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HotelInputs, userInputs,bookingInputs,MembershipInputs,UserMembershipInputs,employeeInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { bookingColumns, hotelsColumns, userColumns,membershipColumns, paymentColumns } from "./datatablesource";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user){
      return <Navigate to="/login" />;
    }
    return children
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            
            <Route path="users">
              <Route index element={<ProtectedRoute><List columns={userColumns}/></ProtectedRoute>} />
             
             
            </Route>
            <Route path="videos">
              <Route index element={<ProtectedRoute><List columns={hotelsColumns}/></ProtectedRoute>} />
              
            </Route>
   
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
