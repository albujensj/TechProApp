import React from "react";

const Info = () => {
    return (
        <div className="container-fluid">
            <div class="row justify-content-center align-items-center mt-5 mb-5">
                <div class="col-lg-6 col-sm-12">
                    <img src="/src/assets/img/newsletter.jpg" alt="" class="info-img"/>
                </div>
                <div class="info col-lg-6 col-sm-12">
                    <h2 class="fw-bold mb-4">Recibe actualizaciones</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime minus accusantium vel ducimus nemo
                        quae quaerat, earum fugit pariatur voluptates voluptatibus molestiae! Totam, laudantium facere.</p>
                    <div class="mb-3">
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                            placeholder="Tu Email" />
                    </div>
                    <div class="d-grid gap-2">
                        <button type="button" name="info-button" id="info-button" class="btn btn-primary fw-bold">
                            INSCRIBIRME
                        </button>
                    </div>
                </div>
                <div class="row text-center mt-5 mb-3">
                    <span class="text text-primary">TODOS LOS DERECHOS RESERVADOS</span>
                </div>
            </div>
        </div>
    )
}

export default Info;