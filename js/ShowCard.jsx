// @flow

import React from 'react';
// import { shape, string } from 'prop-types'; Don't need this with flow
import styled from 'styled-components';

// goes into a function in styled-components
const Wrapper = styled.div`
	width: 32%;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`;

const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;
`;

const ShowCard = (props: { show: Show }) => (
	<Wrapper>
		<Image alt={`${props.show.title} props.Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
		<div>
			<h3>{props.show.title}</h3>
			<h4>({props.show.year})</h4>
			<p>{props.show.description}</p>
			<p>Additional thing</p>
		</div>
	</Wrapper>
);

// This is great for documentation. But like, not useful for runtime.
// ShowCard.propTypes = {
// 	show: shape({
// 		poster: string.isRequired,
// 		title: string.isRequired,
// 		year: string.isRequired,
// 		description: string.isRequired
// 	}).isRequired
// };

export default ShowCard;
