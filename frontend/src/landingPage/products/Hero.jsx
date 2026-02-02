import React from "react";

export default function Hero(){
    return (
        <div className="container border-bottom">
            <div className="row text-center my-5 p-3">
                <h1>Technology</h1>
                <h3 className="text-muted my-3">Sleek, modern and intuitive trading platforms</h3>
                <p className="mb-4">Check out our {" "}
                    <a href="" style={{ textDecoration: "none" }}>
                        investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
            
        </div>
    );
}