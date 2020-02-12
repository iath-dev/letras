import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ lyric }) => (
    <React.Fragment>
        <h2>Letra Canción</h2>
        <p className="letra">{lyric}</p>
    </React.Fragment>
)

Song.propTypes = {
    lyric: PropTypes.string.isRequired,
}
 
export default Song;
