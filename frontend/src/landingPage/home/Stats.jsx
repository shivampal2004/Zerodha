import React from "react";

export default function Stats(){
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted mb-3">That's why 1.3+ crore customers trust Zerodha with $.5+ crores worth of equity investments.</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted mb-3">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="text-muted mb-3">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted mb-3">With initiatives like Nudge and Kill Switch, we dont just faciliate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 pt-5">
                    <img src="/images/ecosystem.png" alt="ecosystem" style={{width:"90%"}} />
                    <div className="">
                        <a href="" className="mx-4">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" className="mx-4">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}