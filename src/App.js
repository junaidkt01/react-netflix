import React from 'react'
import './App.css'
import Banner from './Componets/Banner/Banner'
import NavBar from './Componets/NavBar/NavBar'
import {action, originals,romanceMovies,comedy,horror,documentries} from './urls';
import RowPost from './Componets/RowPost/RowPost'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url = {action} title='Action' isSmall/>
      <RowPost url = {romanceMovies} title='Romance' isSmall/>
      <RowPost url = {comedy} title='Comedy' isSmall/>
      <RowPost url = {horror} title='Horror' isSmall/>
      <RowPost url = {documentries} title='Documentries' isSmall/>
    </div>
  );
}

export default App;
