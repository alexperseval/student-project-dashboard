import React, { Component } from 'react'

// This component represents the home page and is called by App.js according to the routes.

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header"><strong>Accueil</strong> <small><abbr title="Projet Individuel">PJI</abbr> 2021 - Etat des projets</small></div>
                    <div className="card-body text-justify">
                        <p className="lead"><strong>Auteurs:</strong> Tanguy Debacker - Alexandre Perseval</p>

                        <p>Bienvenue sur l'application <mark>"Etat des projets"</mark>. Vous
                        pouvez accéder à la liste des projets connus via la barre de navigation
                        en cliquant sur <mark>"Liste des projets"</mark>.
                        </p>

                        <p>Une fois sur la page <mark>"Liste des projets"</mark>, vous pouvez
                        rechercher un projet via la barre de recherche. En cliquant sur le projet
                        voulu, vous arriverez sur la page <mark>"Détails du projet"</mark>.
                        </p>

                        <p>La page <mark>"Détails du projet"</mark> est découpée en deux parties:
                        </p>
                        <ul>
                            <li>
                                <p><mark>Informations générales</mark>: liste les informations relatives au projet
                                (nom, url, membres, ID, etc...)
                                </p>
                            </li>
                            <li>
                                <p><mark>Analyse du projet</mark>: analyse le projet, notamment grâce aux informations
                                contenues dans les commits Git. Les analyses sont proposées sous la forme
                                de tableaux, de graphiques, etc...
                                </p>
                            </li>
                        </ul>

                        <p>Contact:
                        </p>
                        <ul>
                            <li>
                                <p>Tanguy Debacker (mail: tanguy.debacker.etu@univ-lille.fr)</p>
                            </li>
                            <li>
                                <p>Alexandre Perseval (mail: alexandre.perseval.etu@univ-lille.fr)</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}

export default Home
