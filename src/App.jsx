import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import { ProfilePhu } from "./pages";
import ProfileDan from "./pages/profileDan";

import ProfileDai from "./pages/profileDai";
import ProfileHoa from "./pages/profileHoa";
import ProfileThanh from "./pages/profileThanh";

function App() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/profile_phu" element={<ProfilePhu />} />
        <Route path="/profile_dan" element={<ProfileDan />} />
        <Route path="/profile_dai" element={<ProfileDai />} />
        <Route path="/profile_hoa" element={<ProfileHoa />} />
        <Route path="/profile_thanh" element={<ProfileThanh />} />
      </Routes>
    </>
  );
}

export default App;
