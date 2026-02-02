import React from "react";

export default function Left({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 py-5">
                    <img src={imageUrl}/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="">
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{textDecoration:"none", marginLeft:"60px"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}><img src="/images/googlePlayBadge.svg" alt="googlePlay" /></a>
                        <a href={appStore} style={{textDecoration:"none", marginLeft:"40px"}}><img src="/images/appstoreBadge.svg" alt="appStore" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}