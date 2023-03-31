import React, {useEffect} from 'react'
import img from '../../assets/img(1).jpg'
import img2 from '../../assets/img(2).jpg'
import img3 from '../../assets/img(3).jpg'
import img4 from '../../assets/img(4).jpg'
import img5 from '../../assets/img(5).jpg'
import img6 from '../../assets/img(6).jpg'
import img7 from '../../assets/img(7).jpg'
import img8 from '../../assets/img(8).jpg'
import img9 from '../../assets/img(9).jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import './Main.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =[{
        id:1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
        },
        
        {
        id:2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
        },
        
        {
        id:3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish. Always interesting to be in this place'
        },

        {
        id:4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: '..According to the world Tourism ranking, 45Million people visit Turkey each year, and from that about 2 MIllion come to visit Cappadocia. This place is known for its luxurious nad adventurous activities'
        },

        {
        id:5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'A city in central Mexico, Guanajuato is known for its history of silver meaning and colonial aechitecture. The houses in the city are very attractively pointed with the most bright colors available. Always welcome.'
        },

        {
        id:6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The vibrant hues of the houses are its tenchmark and explain the beauty of this place. Also if you are a foodies and love seafood you will be exhilarated with the choise you are about to get here. Happy explooring great food!'
        },

        {
            id:7,
            imgSrc: img7,
            destTitle: 'Angkor Wat',
            location: 'Combodia',
            grade: 'CULTURAL RELAX',
            fees: '$790',
            description: 'Angkor Wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Combodia. This place is known for its luxurious stays and adventurous activities'
        },

        {
        id:8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'AN immense mousoleum of white marble build in Agra by Mughal Empire Shah Jahan in memory of his wife Mumtaz the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities'  
        },

        {
        id:9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali is an Indonesian Island and one of the best holiday destinations in the indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'   
        
    }]

const Main = ()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <section className='main section container'>
            
            <div className='secTitle'>
                <h3 data-aos="fade-right" className='title'>
                    Most visited destinations
                </h3>
            </div>

            <div className='secContent grid'>
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className='cardInfo'>
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon'/>
                                    </span>
                                    <span className='name'>{location}</span>
                                    <div className='fees flex'>
                                        <div className='grade'>
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
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






