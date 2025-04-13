import "./App.css";

import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import Userposts from "./UserPosts";

function ProfilePage() {
	return (
		<>
			<ProfileImage />
			<UserInfo />
			<Userposts />
		</>
	);
}

export default ProfilePage;
