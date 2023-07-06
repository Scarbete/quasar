import classes from './BurgerModal.module.css'
import React from 'react'

export default function BurgerModal({clickBurger, burger}) {

    return (
        <div className={classes.modal} onClick={clickBurger}>
            {burger ? 'close' : 'open'}
        </div>
    )
}