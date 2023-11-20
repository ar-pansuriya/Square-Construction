import React, { useEffect } from 'react'
import '../stylesheets/Users3.css'
import penicon from '../assetes/penicon.png'
import producticon from '../assetes/producticon.png'
import worldicon from '../assetes/worldicon.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Users() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div className="users">
                <div className="users-left" data-aos='fade-left'>
                    <h3>Fabulous Design Rendered By Our Users</h3>
                    <h5>Users Unleash Fabuluos Design Magic.</h5>
                </div>
                <div className="users-right" data-aos='fade-right'>
                    <div className="users-right-card">
                        <img src={penicon} alt="penicon" />
                        <span>8M</span>
                        <p>Interior Designer Worldwide</p>
                    </div>
                    <div className="users-right-card">
                        <img src={producticon} alt="producticon" />
                        <span>32M</span>
                        <p>3d Product Models To Deploy</p>
                    </div>
                    <div className="users-right-card">
                        <img src={worldicon} alt="worldicon" />
                        <span>25K</span>
                        <p>Interior Designer Worldwide</p>
                    </div>
                </div>
            </div>
        </>
    )
}
