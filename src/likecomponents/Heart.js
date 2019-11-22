import React from 'react';
import PropTypes from 'prop-types';
import {FaStar} from 'react-icons/fa';
import './Heart.css';

const Heart = ({clickHeart}) => {
	const handleClick = () => {
		clickHeart()
	}
	return (
		<div className='HeartContainer'>
			<FaStar className='FaStar' onClick={()=> handleClick()}/>
		</div>
	)
}

Heart.propTypes = {
	clickHeart: PropTypes.func.isRequired,
}

export default Heart;