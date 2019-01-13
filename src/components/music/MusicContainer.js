import React from 'react';
import Album from './Album';
import { musicdata } from './musicdata';

class MusicContainer extends React.Component {
	render() {
		return (
			<div>
				<div className="header-1">
					Albums
				</div>

				{musicdata.map(
					album => {
						return (
							<Album
								key={
									album.keyId
								}
								album={album}
							/>
						);
					}
				)}
			</div>
		);
	}
}

export default MusicContainer;
