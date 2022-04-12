import React from 'react'
import { useContext, useState } from 'react';
import {appContext} from '../App'
import './Contenu/Contenu.css'

export default function Contenu({lang}) {
    const data = useContext(appContext);

    const actualLang = () => {
        if (lang ==='fr') {
            return (
                <div className='content'>
                    <h1 className="title">{data['FR'].title}</h1>
                    <p className="content-txt">{data.FR.txt}</p>
                </div>
                )
        }
        else if (lang ==='en') {
            return (
                <div className='content'>
                    <h1 className="title">{data['ES'].title}</h1>
                    <p className="content-txt">{data.EN.txt}</p>
                </div>
                )
        }else if (lang ==='es') {
            return (
                <div className='content'>
                    <h1 className="title">{data['EN'].title}</h1>
                    <p className="content-txt">{data.ES.txt}</p>
                </div>
                )
        }
    }
  return (
    <div className='content.txt'>
    {actualLang()}
    </div>  
  )
}
