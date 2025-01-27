import React from 'react'
import { useParams } from 'react-router-dom'

export const Play = () => {
    const id = useParams().id
  return (
    <div>
        <h1>PLAYING... {id}</h1>
    </div>
  )
}
