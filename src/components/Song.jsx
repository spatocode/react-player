import React from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'

const Song = ({ song, rating, onRate, onRemove }) =>
    <section className="song">
        <p>{song}</p>
        <button className="remove-button" onClick={onRemove}>X</button>
        <div className="rating-wrapper">
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </section>

Song.propTypes = {
    song: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Song.defaultProps = {
    rating: 0,
    onRemove: f=>f,
    onRate: f=>f
}

export default Song