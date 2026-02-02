import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom">
            <div class="container p-1">
                <Link class="navbar-brand" to="/">
                    <img src="/images/logo.svg" alt="logo" style={{ width: "40%" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" to="/product">Product</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" to="/support">Support</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link active" href="#"><i class="fa-solid fa-bars"></i></a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}