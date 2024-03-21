import React from "react";

const Card = () => {
    return (
        <div className="px-3 col-lg-3 col-sm-10 col-md-6 rounded">
            <div className="card p-0">
                <div className="placeholder bg-gray d-flex align-items-center justify-content-center fs-1 w-100">500x325</div>
                <div className="d-flex flex-column align-items-center justify-content-center text-center">
                    <h3>Card Title</h3>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusamus at quae numquam fugit obcaecati animi in corrupti dolores harum maxime, libero repellendus esse excepturi iure beatae culpa, quam a?</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Find Out More!</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;