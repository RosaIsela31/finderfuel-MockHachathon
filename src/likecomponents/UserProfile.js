import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({Likes}) => {
	return (
		<div className='UserProfileContainer'>
			<div className='InfoContainer'>
				<div className='LikesNumber'>  {Likes}  </div>
			</div>
		</div>
	)
}

UserProfile.propTypes = {
	Likes: PropTypes.number.isRequired
}

export default UserProfile;