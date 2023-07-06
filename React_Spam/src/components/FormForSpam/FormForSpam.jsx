import classes from './FormForSpam.module.css'
import React, { useState } from 'react'

export default function FormForSpam({ setBurger, clickSpam }) {
    const [spam, setSpam] = useState('')

    const addSpam = (event) => {
        event.preventDefault()
        if (spam.trim() !== '') {
            clickSpam(spam)
            setBurger(false)
        }
    }

    return (
        <form onSubmit={addSpam} className={classes.spamBox}>
            <div className={classes.spamInput}>
                <input
                    value={spam}
                    type='text'
                    placeholder={'Текст для спама'}
                    onChange={e => setSpam(e.target.value)}
                />
            </div>
            <button type={'submit'}>Спам</button>
        </form>
    )
}