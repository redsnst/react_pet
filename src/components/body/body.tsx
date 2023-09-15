

import { Route, Routes } from "react-router-dom";
import Welcome from "../../views/welcome";
import Login from "../../views/login";

  
function AppBody() {
  return (
    <>
        <div className="w-full h-full relative">
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
          </Routes>  
        </div>
    </>
  );
}

export default AppBody;
