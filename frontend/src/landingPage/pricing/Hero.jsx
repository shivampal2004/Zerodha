import React from "react";

export default function Hero(){
    return (
        <div className="container">
            <div className="row text-center border-bottom p-3 my-5">
                <h1>Pricing</h1>
                <h3 className="text-muted mt-4 mb-5 fs-5">Free equity investments and flat ₹20 traday and F&O trades</h3>
            </div>
            <div className="row p-3 my-5 text-center">
                <div className="col-4 p-4">
                    <img src="/images/pricing0.svg" alt="0" />
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="/images/intradayTrades.svg" alt="20" />
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="/images/pricingEquity.svg" alt="" />
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}