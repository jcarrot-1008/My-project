import React from 'react'
import Lottie from 'react-lottie-player'

import dev from '/public/dev'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={dev}
      play
      style={{ width: `100%`, height: `100%` }}
    />
  )
}
