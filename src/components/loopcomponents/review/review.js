import React from "react";

function Review(props) {
    return(
        <li alt={props.alt}>
        <img src={props.links} />
        <div>{props.comment}</div>
        <div className="author">{props.author}</div>
        <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        </div>
    </li>
    )
}
export default Review;