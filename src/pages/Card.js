import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Card() {
  // const location = useLocation();
  // const {data} = location.state;
  let { state } = useLocation();
  console.log(state && state)
  return (
    <div>
      cards

      
    </div>
  )
}
