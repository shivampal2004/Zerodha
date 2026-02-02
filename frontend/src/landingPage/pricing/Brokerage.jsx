import React from "react";

export default function Brokerage() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-6 p-4">
                    <h4 style={{ color: "#0d6efd" }}>Brokerage Calculator</h4>
                    <ul style={{ textAlign: "left", lineHeight: "2.2" }} className="text-muted fs-5">
                        <li className="brokeLI">
                            Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                            GST per order.
                        </li>
                        <li className="brokeLI">Digital contract notes will be sent via e-mail.</li>
                        <li className="brokeLI">
                            Physical copies of contract notes, if required, shall be charged
                            ₹20 per contract note. Courier charges apply.
                        </li>
                        <li className="brokeLI">
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).
                        </li>
                        <li className="brokeLI">
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li className="brokeLI">
                            If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className="col-6 p-4">
                    <h4 style={{ color: "#0d6efd" }}>List of Charges</h4>
                    <ul style={{ textAlign: "left", lineHeight: "2.2" }} className="text-muted fs-5">
                        <li className="brokeLI">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</li>
                        <li className="brokeLI">₹30 + GST per pledge request per ISIN.</li>
                        <li className="brokeLI">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</li>
                        <li className="brokeLI">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</li>
                        <li className="brokeLI">₹25 per transaction.</li>
                        <li className="brokeLI">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}