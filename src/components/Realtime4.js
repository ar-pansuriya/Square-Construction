import React, { useEffect } from 'react'
import '../stylesheets/Realtime4.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Realtime() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <>
      <div className="realtime">
        <h1 data-aos='fade-right'>Real-time generation of optimal building designs.</h1>
        <p data-aos='fade-left'>Square streamline initial residential project stages,ensuring compliance with quantitative requirements while emphasizing architectural design quality in real time.</p>
      </div>
    </>
  )
}
