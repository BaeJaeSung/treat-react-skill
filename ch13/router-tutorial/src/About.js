import qs from "qs";
import { useLocation } from "react-router-dom";

const About = () => {
  const { search } = useLocation();
  const query = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>intro</h1>
      <p>intro page</p>
      {showDetail && <p>detail == true</p>}
    </div>
  );
};

export default About;
