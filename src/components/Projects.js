import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="row">
        {/* Spotify Clone */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Spotify Clone</h5>
              <p className="card-text">
              A music streaming app built with HTML, CSS, and JavaScript, allowing users to enjoy a selection of K-pop tracks in a stylish interface.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <p className="card-text">
                A simple calculator built with HTML, CSS, and JavaScript that performs basic arithmetic operations.
              </p>
            </div>
          </div>
        </div>

        {/* Tic Tac Toe Game */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Tic Tac Toe Game</h5>
              <p className="card-text">
                An interactive Tic Tac Toe game created with HTML, CSS, and JavaScript, allowing two players to compete.
              </p>
            </div>
          </div>
        </div>

        {/* Flipkart Website */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Flipkart Website</h5>
              <p className="card-text">
                A clone of the Flipkart e-commerce website developed using HTML, CSS, and JavaScript for a better shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
