import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./HomeStyle.css"
export default function Home() {
    const [Carddata, setCarddata] = useState([])
    const handleGetData = async () => {
        const { data } = await axios.get("http://localhost:5000/carddata")
        console.log(data);
        setCarddata(data)
    }
    useEffect(() => {
        handleGetData()
    }, [])

    return <>
        {/* {JSON.stringify(Carddata)} */}
        <div className="container-fluid box">
            <div className="title">
                <p className='heading '>Title</p>
                <p className='info mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, reiciendis delectus. Illo necessitatibus placeat fugiat numquam alias veritatis consectetur. Non omnis </p>
                <button className='btn btn-light'>Read More</button>
            </div>

        </div>
        <div className="container">
            <div className="classes mt-5">
                <div className="heading">Classes</div>
                <p className='info mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id='card col-4 d-flex'>
                {
                    Carddata.map((item) => {
                        return <div>
                            <div className="card col-4">
                                <img src={item.ImageUrl} className="img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.Name}</h5>
                                    <p className="card-text">{item.ShortDesc}</p>

                                </div>
                                <button className='btn btn-dark'>view</button>
                            </div>

                        </div>
                    }

                    )
                }
            </div>
        </div>

    </>
}
