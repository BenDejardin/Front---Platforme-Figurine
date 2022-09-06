import React, { Component } from "react";

export default class Add extends Component {
  render() {
    return (
      <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label for="nameFigurine" className="form-label">
              Nom de la Figurine :
            </label>
            <input type="text" className="form-control" id="nameFigurine" />
          </div>

          <div className="mb-3">
            <label for="picture_URL" className="form-label">
              Lien de l'image concernant la figurine :
            </label>
            <input type="url" className="form-control" id="picture_URL" />
          </div>

          <div className="mb-3">
            <label for="description" className="form-label">
              Description du produit :
            </label>
            <textarea className="form-control" id="description"></textarea>
          </div>

          <div className="mb-3">
            <label for="price" className="form-label">
              Prix :
            </label>
            <input type="number" className="form-control" id="price" />
          </div>

          <div className="mb-3">
            <label for="vendeur_URL" className="form-label">
              Lien du vendeur :
            </label>
            <input type="url" className="form-control" id="vendeur_URL" />
          </div>

          <button type="submit" className="btn btn-primary">
            Ajouter une nouvelle figurine
          </button>
        </form>
      </div>
    );
  }
}
