import React, { Component } from "react";

let listeJSONFigurines = [
  {
    nom: "Figurine 1",
    url_image:
      "https://www.pro-bems.com/IMAGES/images_1/FIGSS300542/g/FIGSS300542_5.jpg",
    description:
      'Statuette en résine "Premium Format", dimensions env. 52 x 25 x 28 cm sur socle décor. Modèle en édition limitée.',
    prix: 14.99,
    lien_vendeur:
      "https://www.shopforgeek.com/DC-COMICS-BATMAN-STATUETTE-PREMIUM-FORMAT-53CM-199867.html",
  },
  {
    nom: "Figurine 2",
    url_image:
      "https://www.pro-bems.com/IMAGES/images_1/FIGSS300542/g/FIGSS300542_5.jpg",
    description:
      'Statuette en résine "Premium Format", dimensions env. 51 x 25 x 28 cm sur socle décor. Modèle en édition limitée.',
    prix: 20.99,
    lien_vendeur:
      "https://www.shopforgeek.com/DC-COMICS-BATMAN-STATUETTE-PREMIUM-FORMAT-53CM-199867.html",
  },
  {
    nom: "Figurine 3",
    url_image:
      "https://www.pro-bems.com/IMAGES/images_1/FIGSS300542/g/FIGSS300542_5.jpg",
    description:
      'Statuette en résine "Premium Format", dimensions env. 55 x 25 x 28 cm sur socle décor. Modèle en édition limitée.',
    prix: 10.99,
    lien_vendeur:
      "https://www.shopforgeek.com/DC-COMICS-BATMAN-STATUETTE-PREMIUM-FORMAT-53CM-199867.html",
  },
  {
    nom: "Figurine 4",
    url_image:
      "https://www.pro-bems.com/IMAGES/images_1/FIGSS300542/g/FIGSS300542_5.jpg",
    description:
      'Statuette en résine "Premium Format", dimensions env. 53 x 25 x 28 cm sur socle décor. Modèle en édition limitée.',
    prix: 50.99,
    lien_vendeur:
      "https://www.shopforgeek.com/DC-COMICS-BATMAN-STATUETTE-PREMIUM-FORMAT-53CM-199867.html",
  },
];

export default class Body extends Component {
  render() {
    return (
      <div className="mt-5 container">
        <div className="row">
          <CreateAllCasses />
        </div>
      </div>
    );
  }
}

function CreateAllCasses() {
  return listeJSONFigurines.map((figurine) => (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={figurine.url_image} alt="" />
        <div className="card-body">
          <p className="card-text">{figurine.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={figurine.lien_vendeur}
                target="_blank"
                className="btn btn-sm btn-outline-secondary"
              >
                Accéder au site vendeur
              </a>
            </div>
            <small className="text-muted">{figurine.prix}€</small>
          </div>
        </div>
      </div>
    </div>
  ));
}
