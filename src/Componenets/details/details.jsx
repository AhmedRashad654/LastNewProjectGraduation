import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const { id } = useParams()
  const [detailsprd, setdetailprd] = useState(null)

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => {
      setdetailprd(res.data)
    })
  }, [id])

  return (
    <>
      {detailsprd ? (
        <h1>{detailsprd.title}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Details
