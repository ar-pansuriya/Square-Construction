import React from 'react'
import '../stylesheets/Square2.css'
import virtual from '../assetes/home-1-bg111.jpg'

export default function Square2() {
    return (
        <main className='square2-main'>
            <section className="square2-first">
                <div className="square2-bg">
                    <div className="square2-box">
                        <h2>Square</h2>
                        <div className="square2-selection">
                            <select>
                                <option value="">Type Of Property</option>
                                <option value="Morden">Morden House</option>
                                <option value="Luxrious">Luxrious House</option>
                                <option value="Simple">Simple House</option>
                            </select>
                        </div>
                        <div className="square2-selection">
                            <select>
                                <option value="">Size</option>
                                <option value="600">600-2400 sq.ft</option>
                                <option value="800">800-2600 sq.ft</option>
                                <option value="1000">1000-2800 sq.ft</option>
                            </select>
                        </div>
                        <div className="square2-selection">
                            <select>
                                <option value="">Interior Features</option>
                                <option value="Open">Open floor plans</option>
                                <option value="Minimal">Minimal design</option>
                                <option value="Vastu">Vastu shashtra</option>
                            </select>
                        </div>
                        <div className="square2-checkbox">
                            <h5>Smart Home Features</h5>
                            <div className="checkboxs">
                                <input type="checkbox" name="automation" id="automation" />
                                <label htmlFor="automation">Smart Home Automation</label>
                            </div>
                            <div className="checkboxs">
                                <input type="checkbox" name="Security" id="Security" />
                                <label htmlFor="Security">Smart Home Security System</label>
                            </div>
                            <div className="checkboxs">
                                <input type="checkbox" name="Car" id="Car" />
                                <label htmlFor="Car">Car Charging Station</label>
                            </div>
                        </div>
                        <div className="square2-3d">
                            <h5>Virtual Tours</h5>
                            <img src={virtual} alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <div className="square2-black"></div>
        </main>
    )
}
