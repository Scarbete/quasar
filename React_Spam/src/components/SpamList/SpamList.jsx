import classes from './SpamList.module.css'
import React from 'react'

export default function SpamList({ texts }) {

    return (
        <ul className={classes.spamList}>
            {texts.map((text, index) =>
                <li key={index}>ID: {index} Title: {text}</li>
            )}
        </ul>
    )
}