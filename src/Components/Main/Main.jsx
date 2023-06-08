/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react'
import './main.css'
import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'a place for you to relax',
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Sea',
        location: 'Vn',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'a place for you to surfing',
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Mountain',
        location: 'Vn',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'a place for you to climb',
    }
]
const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos='fade-left' className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos='fade-up'
                                className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="desTitle">{destTitle} </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name'> {location} </span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS  <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Main