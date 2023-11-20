import React, { useEffect } from 'react'
import '../stylesheets/Detailed5.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Detailed5() {

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="detailed">
                <div className="detailed-up">
                    <div className="detailed-up-left">
                        <div className="detailed-up-left-up" data-aos='fade-right'>
                            <h2>Detailed introduction of design criteria</h2>
                            <p>The system allows the introduction of design criteria such as minimum and maximun net areas for each room and typology, minimum dimnesions of the rooms, height and vertival communications to ensure the project compliance.</p>
                            <p>A platform adapted to your needs</p>
                        </div>
                        <div className="detailed-up-left-down">
                            <div className="detailed-up-left-down-left" data-aos='fade-down'></div>
                            <div className="detailed-up-left-down-right" data-aos='fade-down'>
                                <h2>Manual project modeling</h2>
                                <p>he user models in 2D and 3D the volume of the above-ground and below-ground bulidings and parking on which the automated design</p>
                            </div>
                        </div>
                    </div>
                    <div className="detailed-up-right" data-aos='fade-left'></div>
                </div>
                <a href="#">Learn more</a>
            </div>
        </>
    )
}
