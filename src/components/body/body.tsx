

import { Route, Routes } from "react-router-dom";
import Welcome from "../../views/welcome";
import Login from "../../views/login";
import SignUp from "../../views/sing-up";
import PrivateRoutes from "../../utils/privateRoute";
import Schedule from "../../views/schedule";

  
function AppBody() {
  return (
    <>
        <div className="w-full h-full relative">
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/schedule" element={<Schedule />} />
              </Route>
          </Routes>  
        </div>
    </>
  );
}

export default AppBody;
