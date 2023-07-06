import FormForSpam from './components/FormForSpam/FormForSpam.jsx'
import BurgerModal from './components/BurgerModal/BurgerModal.jsx'
import SpamList from './components/SpamList/SpamList.jsx'
import React, { useState } from 'react'
import './App.css'

export default function App () {
    const [texts, setTexts] = useState([])
    const [burger, setBurger] = useState(true)

    const clickBurger = () => setBurger(burger => !burger)

    const clickSpam = (text) => {
        setTimeout(() => {
            setTexts(prev => [...prev, text])
            clickSpam(text)
        }, 250)
    }

    return (
        <>
            <BurgerModal burger={burger} clickBurger={clickBurger}/>
            {burger && <FormForSpam setBurger={setBurger} clickSpam={clickSpam}/>}
            <SpamList texts={texts}/>
        </>
    )
}