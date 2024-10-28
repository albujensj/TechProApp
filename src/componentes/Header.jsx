import React from "react";

const Header = () => {
    return (
        <div className="container-fluid">
            <div class="row p-3 d-flex justify-content-center bg-dark vh-100">
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src="/src/assets/img/header.webp" class="header-left alt=" />
                </div>
                <div class="header-right col-lg-6 d-flex flex-column justify-content-center align-items-start">
                    <h3 class="fw-bold">Sonido profesional</h3>
                    <h2 class="gradient-text">TechPRO</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae laboriosam ut itaque, commodi sed
                        cupiditate, illum suscipit id voluptatem voluptate, dolor enim numquam accusantium. Aperiam
                        veritatis rem sed tenetur?</p>
                    <small>Desde<strong class="fs-1">$299</strong></small>
                </div>
            </div>
        </div>
    )
}

export default Header;