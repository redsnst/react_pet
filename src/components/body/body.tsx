

import { Route, Routes } from "react-router-dom";
import Welcome from "../../views/welcome";
import Login from "../../views/login";
import SignUp from "../../views/sing-up";

  
function AppBody() {
  return (
    <>
        <div className="w-full h-full relative">
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>  
        </div>
    </>
  );
}

export default AppBody;
