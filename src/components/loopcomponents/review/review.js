import React from "react";

function Review(props) {
    return(
        <li data-aos='zoom-in' data-aos-duration="1000" data-aos-mirror="true"><img src={props.links} alt='customer pik' /> 
        <comment>{props.comment}</comment>
        <author>{props.author}</author>
        <review>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        </review>
    </li>
    )
}
export default Review;