import React from "react";

const Services = () => {
    return (
        <div className="container-fluid">
            <div className="row vh-50 d-flex justify-content-center mt-5">
                <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center">
                    <img className="img-services mb-3" src="/src/assets/img/icono-sonido.svg" alt=""/>
                        <h4 className="fw-bold text-primary mb-3">GRAN SONIDO</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum perferendis, voluptatibus
                            corporis rerum neque sunt odit dignissimos deleniti minus?</p>
                </div>
                <div className="col-lg-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center">
                    <img className="img-services mb-3" src="/src/assets/img/icono-garantia.svg" alt=""/>
                        <h4 className="fw-bold text-primary mb-3">GARANTÍA DE POR VIDA</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum perferendis, voluptatibus
                            corporis rerum neque sunt odit dignissimos deleniti minus?</p>
                </div>
                <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center">
                    <img className="img-services mb-3" src="/src/assets/img/icono-bateria.svg" alt=""/>
                        <h4 className="fw-bold text-primary mb-3">+20 HORAS DE BATERÍA</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum perferendis, voluptatibus
                            corporis rerum neque sunt odit dignissimos deleniti minus?</p>
                </div>
            </div>
        </div>
    )
}

export default Services;