import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>user list</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert profile</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong profile</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>select user</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
