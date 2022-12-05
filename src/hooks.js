import axios from 'axios';
import React, { useState } from 'react';
import uuid from "uuid";


// toggles state to opposite of what it currently is
const useFlip = () => {
    const [flipped, setFlipped] = useState(true);
    const toggleFlip = () => {
        setFlipped(flipped => !flipped)
    }
    return [flipped, toggleFlip]

}

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const addNewCard = async () => {
        const resp = await axios.get(url)
        setCards(cards => [...cards, { ...resp.data, id: uuid() }])
    }
    return [cards, addNewCard]
}

export { useFlip, useAxios };