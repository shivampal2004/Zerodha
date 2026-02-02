import React from "react";

export default function CreateTicket(){
    return (
        <div className="container">
            <div className="row p-5 my-5">
                <h2>To create a ticket, select a relevant topic</h2>
                <div className="col-4 py-5 my-2">
                    <h4><i class="fa-solid fa-circle-plus"></i> Account Opening</h4><br />
                    <a className="createTicketLinks" href="">Online Account Opening</a><br />
                    <a className="createTicketLinks" href="">Offline Account Opening</a><br />
                    <a className="createTicketLinks" href="">Company, Partnership and HUF Account</a><br />
                    <a className="createTicketLinks" href="">Opening</a><br />
                    <a className="createTicketLinks" href="">NRI Account Opening</a><br />
                    <a className="createTicketLinks" href="">Charges at Zerodha</a><br />
                    <a className="createTicketLinks" href="">Zerodha IDFC FIRST Bank 3-in1 Account</a><br />
                    <a className="createTicketLinks" href="">Getting Started</a><br />
                </div>
                <div className="col-4 py-5 my-2">
                    <h4><i class="fa-solid fa-circle-user"></i> Your Zerodha Account</h4><br />
                    <a className="createTicketLinks" href="">Your Profile</a><br />
                    <a className="createTicketLinks" href="">Account Modification</a><br />
                    <a className="createTicketLinks" href="">Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a className="createTicketLinks" href="">Nomination</a><br />
                    <a className="createTicketLinks" href="">Transfer and conversion of securities</a><br />
                </div>
                <div className="col-4 py-5 my-2">
                    <h4><i class="fa-brands fa-uikit"></i> Kite</h4><br />
                    <a className="createTicketLinks" href="">IPO</a><br />
                    <a className="createTicketLinks" href="">Trading FAQs</a><br />
                    <a className="createTicketLinks" href="">Margin Trading Facility (MTF) and margins</a><br />
                    <a className="createTicketLinks" href="">Charts and Orders</a><br />
                    <a className="createTicketLinks" href="">Alerts and Nudges</a><br />
                    <a className="createTicketLinks" href="">General</a><br />
                </div>
                <div className="col-4 py-5 my-2">
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i> Funds</h4><br />
                    <a className="createTicketLinks" href="">Add Money</a><br />
                    <a className="createTicketLinks" href="">Withdraw Money</a><br />
                    <a className="createTicketLinks" href="">Add bank accounts</a><br />
                    <a className="createTicketLinks" href="">eMandates</a><br />
                </div>
                <div className="col-4 py-5 my-2">
                    <h4><i class="fa-solid fa-terminal"></i> Console</h4><br />
                    <a className="createTicketLinks" href="">Portfolio</a><br />
                    <a className="createTicketLinks" href="">Corporate actions</a><br />
                    <a className="createTicketLinks" href="">Funds statement</a><br />
                    <a className="createTicketLinks" href="">Report</a><br />
                    <a className="createTicketLinks" href="">Profile</a><br />
                    <a className="createTicketLinks" href="">Segments</a><br />
                </div>
                <div className="col-4 py-5 my-2">
                    <h4><i class="fa-brands fa-bitcoin"></i> Coin</h4><br />
                    <a className="createTicketLinks" href="">Mutual funds</a><br />
                    <a className="createTicketLinks" href="">National Pension Scheme (NPS)</a><br />
                    <a className="createTicketLinks" href="">Fixed Deposit (FD)</a><br />
                    <a className="createTicketLinks" href="">Features on Coin</a><br />
                    <a className="createTicketLinks" href="">Payments and Orders</a><br />
                    <a className="createTicketLinks" href="">General</a><br />
                </div>
            </div>
        </div>
    );
}