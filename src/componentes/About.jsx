import React from "react";

const About = () => {
    return (
        <div className="container-fluid">
            <div class="row bg-primary text-white about">
                <div class="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-start p-3">
                    <h2 class="fw-bold fs-1 mb-5">Sobre los TechPro</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facere dicta culpa dolore quis
                        ad magni doloremque vitae architecto quae repellendus nisi sunt consectetur voluptate, iste eligendi
                        itaque cumque, quibusdam ipsam accusamus ipsum numquam.</p>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <img src="/src/assets/img/imagen-mujer.jpg" alt="" class="img-about" />
                </div>
            </div>
        </div>
    )
}

export default About;