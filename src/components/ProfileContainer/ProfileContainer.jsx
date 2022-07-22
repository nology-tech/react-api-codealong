import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileContainer.scss";

const ProfileContainer = ({ profiles }) => {
  return (
    <div className="profile-container">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.registered.date}
          name={`${profile.name.first} ${profile.name.last}`}
          image={profile.picture.large}
          email={profile.email}
          phoneNumber={profile.phone}
        />
      ))}
    </div>
  );
};

export default ProfileContainer;
