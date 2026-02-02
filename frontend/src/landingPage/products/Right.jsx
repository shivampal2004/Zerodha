import React from "react";

export default function Right({imageUrl, productHeading, productDescription, productLink}){
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productHeading}</h1>
                    <p>{productDescription}</p>
                    <a style={{textDecoration:"none"}} href={productLink}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-6 px-5">
                    <img src={imageUrl} alt="kuch to tha" />
                </div>
            </div>
        </div>
    );
}