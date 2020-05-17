// point d'entrée de l'application
import React from 'react';
import Groupe from './Components/Groupe'
import Header from './Components/Header'

export default class App extends React.Component {
  render() {
    return(
      // insérer la vue qu'on souhaite afficher sur le point d'entrée
      // temporairement j'ai mit la recherche de groupe
      <Groupe/>
    )
  }
}
