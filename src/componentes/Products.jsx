import React from "react";

const Products = () => {
    return (
        <div className="container-fluid">
            <div class="row mt-5">
                <h1 class="fw-bold choose">Elige tus TechPRO</h1>
                <div class="row d-flex justify-content-center align-items-stretch p-5">
                    <div class="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div class="col-12 p-3 d-flex bg-primary-subtle rounded-3 mb-3">
                            <div class="col-6 d-flex flex-column justify-content-center align-items-center">
                                <small class="fw-bold fs-3 mb-5 text-primary">TechPRO X</small>
                                <strong class="fs-1 text-primary">$299</strong>
                            </div>
                            <div class="choose-imgx col-6"></div>
                        </div>
                        <div class="col-12 p-3 d-flex bg-primary-subtle rounded-3 mb-3">
                            <div class="col-6 d-flex flex-column justify-content-center align-items-center">
                                <small class="fw-bold fs-3 mb-5 text-primary">TechPRO Y</small>
                                <strong class="fs-1 text-primary">$399</strong>
                            </div>
                            <div class="choose-imgy col-6"></div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 p-3 d-flex bg-primary rounded-3">
                        <div class="col-6 d-flex flex-column justify-content-center align-items-center text-white">
                            <small class="fw-bold fs-2 mb-5">TechPRO Z</small>
                            <strong class="fs-1">$499</strong>
                        </div>
                        <div class="choose-imgz col-6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;