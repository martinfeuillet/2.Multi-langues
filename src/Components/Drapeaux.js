import React from 'react'
import france from '../assets/france.svg'
import spain from '../assets/spain.svg'
import united from '../assets/united-kingdom.svg'
import './ToggleLangs/ToggleLangs.css'

export default function Drapeaux({handleLang}) {

    function changeLang(lang) {
        handleLang(lang);
    }
  return (
    <div className='container-langs'>
        <img src={france} alt="" onClick={() =>changeLang('fr')} />
        <img src={spain} alt="" onClick={() =>changeLang('es')} />
        <img src={united} alt="" onClick={() =>changeLang('en')} />
    </div>
  )
}
