import React from "react";

export default function Pricing(){
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-4 px-4">
                    <h1 className="mb-3 fs-1">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidder charges</p>
                    <a href="">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row mb-5 text-center">
                        <div className="col p-3 border">
                            <h1 className="mb-3">$0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className="mb-3">1$</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}