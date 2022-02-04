import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "minj",
    description: "dev",
  },
  gildong: {
    name: "gildong",
    description: "honggg",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>none</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
