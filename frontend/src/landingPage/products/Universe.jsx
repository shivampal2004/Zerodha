import React from "react";

export default function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                    <img src="/images/smallcaseLogo.png" alt="smallCase" />
                    <p className="text-small text-muted p-1">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{width:"40%"}} src="/images/streakLogo.png" alt="streak" />
                    <p className="text-small text-muted p-1">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{width:"80%"}} src="/images/sensibullLogo.svg" alt="sensiBull" />
                    <p className="text-small text-muted p-1">Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{width:"60%"}} src="/images/zerodhaFundhouse.png" alt="zerodhaFundHouse" />
                    <p className="text-small text-muted p-1">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{width:"60%"}} src="/images/goldenpiLogo.png" alt="goldenPI" />
                    <p className="text-small text-muted p-1">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{width:"50%"}} src="/images/dittoLogo.png" alt="ditto" />
                    <p className="text-small text-muted p-1">Options trading platform</p>
                </div>
                <button className="p-2 btn btn-primary fs-5 my-5" style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}