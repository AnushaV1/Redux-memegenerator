import React from "react";
import "./Meme.css";
import PropTypes from "prop-types";

const Meme = ({topText, bottomText, url, id, deleteMeme}) => {
    const handleDelete = () => {
        deleteMeme(id);
    }

return (
<div className="Meme">
    <div className="container">
    <span className="top-text">{topText}</span>
    <img src={url} alt="meme" />
    <span className="bottom-text">{bottomText} </span>
    <button id="deleteBtn" onClick={handleDelete}>Delete</button>
    </div>
</div>

)
}
Meme.propTypes = {
    topText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired
};


export default Meme;