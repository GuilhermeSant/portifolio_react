import React, { useState } from "react";
import { PortifolioMobileData } from "./PortifolioMobile-data";
import "./PortifolioMobile.css";

export const PortifolioMobile = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="portifolio-mobile" id="portifolio-mobile">
      <div className="portifolio-container">
        {PortifolioMobileData.map((project, index) => (
          <div className="container-projects" key={index}>
            <p className="project-title">{project.title}</p>
            <img
              src={project.img}
              alt={project.alt}
              className="project-img-mobile"
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProject.title}</h2>
                <div className="modal-mobile-content">
              <div className="modal-img-container">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={selectedProject.gif}
                    alt={selectedProject.alt}
                    className="modal-mobile-img--portrait"
                  />
                </a>
                <span className="modal-hover-msg">
                  Clique na imagem para ver o projeto !!!
                </span>
              </div>
            </div>
            <p className="modal-mobile-description">
              {selectedProject.description}
            </p>
            <div className="qr-code-container"> {/* New container for QR code and text */}
              <div className="qr-code-text"> {/* Container for the text */}
                <p>
                  Pode baixar preview do APP pelo QR Code abaixo:
                </p>
              </div>
              <div className="qr-code-image"> {/* Container for the QR code image */}
                <img
                  src={selectedProject.imgQrCode}
                  alt="Download do App"
                  className="modal-mobile-img--portrait"
                />
              </div>
            </div>
            <button
              className="close-modal-mobile"
              onClick={() => setSelectedProject(null)}
            >
              x
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortifolioMobile;
