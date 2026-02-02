import React from "react";

export default function Hero(){
    return (
        <section className="container" id="supportHeroBG">
            <div className="p-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a className="mx-5" href="">Track Tickets</a>
            </div>
            <div className="row p-5 m-3">
                <div className="col-6 px-5">
                    <h1 className="fs-3 mb-4">Search for an answer or browse help topics to create a ticket</h1>
                    <input className="mb-4" placeholder="Eg: how do i activate F&O, why is my order getting rejected.." /><br />
                    <a href="">Track Account opening</a>&nbsp;&nbsp;
                    <a href="">Track segment activation</a>&nbsp;&nbsp;
                    <a href="">Intraday margins</a>&nbsp;&nbsp;
                    <a href="">Kite user manual</a>&nbsp;&nbsp;
                </div>
                <div className="col-6 px-5">
                    <h1 className="fs-3 mx-5">Featured</h1>
                    <ol className="mx-5">
                        <li>
                            <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}