import React from "react";

const Jumbotron = () => {
    return (
       <div className="row">
            <div className="jumbotron col-lg-8 col-sm-11 mx-auto my-3 bg-light rounded">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima animi dolorum rem eum placeat dolor. Adipisci similique dicta, ipsam molestiae blanditiis fugiat unde mollitia harum perspiciatis! Aperiam, dolores similique.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
       </div>
    );
};

export default Jumbotron;