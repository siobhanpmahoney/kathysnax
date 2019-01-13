import React from 'react';
import Tracks from './Tracks';

class Album extends React.Component {
	onButtonClick = event => {
		let button =
			event.target.name;
		let link = this.props
			.album[button];
		window.open(
			link,
			'_blank'
		);
	};

	trackEmbed = () => {
		return {
			__html: this.decode(
				this.props.album
					.bandcampTracks
			)
		};
	};

	decode = input => {
		let txt = document.createElement(
			'textarea'
		);
		txt.innerHTML = input;
		return txt.value;
	};

	render() {
		const {
			album
		} = this.props;
		return (
			<div className="album-container">
				<div className="album-img-wrapper">
					<img
						className="album-img"
						src={
							album.coverImg
						}
					/>
				</div>
				<div className="album-content-wrapper">
					<div className="album-title">
						{album.title}
						<span className="buttons-wrapper">
							<button
								name="spotifyLink"
								className="stream-button"
								onClick={
									this
										.onButtonClick
								}>
								Stream
							</button>

							<button
								name="purchaseLink"
								className="purchase-button"
								onClick={
									this
										.onButtonClick
								}>
								Purchase
							</button>
						</span>
					</div>

					<div className="tracklist-wrapper">
						<div
							className="tracklist-embed"
							dangerouslySetInnerHTML={this.trackEmbed()}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Album;
