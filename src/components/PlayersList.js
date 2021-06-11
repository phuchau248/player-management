import React, { Fragment, useState, useEffect } from 'react'
import Player from './Player'
import AddPlayer from './AddPlayer'
import axios from 'axios'

const api = 'https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player'

const PlayersList = () => {
    const [onTheField, setOnTheField] = useState([])

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const res = await axios.get(api)
                setOnTheField(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getPlayers()
    }, [])

    const markOnTheField = async id => {
        let curStatus = false
        const newPlayers = onTheField.map(player => {
            if (player.id === id) {
                player.onTheField = !player.onTheField
                curStatus = player.onTheField
            }
            return player
        })
        setOnTheField(newPlayers)
        try {
            await axios.put(
                api + `/${id}`,
                {
                    onTheField: curStatus
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    const deletePlayer = async id => {
        try {
            await axios.delete(api + `/${id}`)
            const newPlayers = onTheField.filter(player => player.id !== id)
            setOnTheField(newPlayers)
        } catch (error) {
            console.log(error.message)
        }
    }

    const addPlayer = async name => {
        try {
            const res = await axios.post(
                api,
                {
                    name,
                    onTheField: false
                }
            )
            console.log(res.data)
            const newPlayers = [...onTheField, res.data]
            setOnTheField(newPlayers)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            <AddPlayer addPlayerFunc={addPlayer} />
            {onTheField.map(player => {
                return (
                    <Player
                        key={player.id}
                        playerProps={player}
                        markOnTheFieldFunc={markOnTheField}
                        deletePlayerFunc={deletePlayer}
                    />
                )
            })}
        </Fragment>
    )
}
export default PlayersList
