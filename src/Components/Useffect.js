import axios from 'axios'
import React, { useEffect, useState } from 'react'
export const Useffect = () => {
    // const[count,setcount] = useState(0)
    // useEffect(()=> {
    //     console.log("the count is" +count)
    //     return ()=> {
    //         console.log("dont play")
    //     }
    // },[count])
    const [click, setclick] = useState("london")
    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${click}&appid=daf3468e726e9c4d555abe56aedd75b6`);
                setdata(res.data);
                console.log(res.data)
            }
            catch (error) {
                console.log("the error is "+ error)
            }
        }
        fetchdata()
    }, [click])
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);
    return (
        // <div>
        //     <h1>count is {count}</h1>
        //     <button onClick={()=> setcount(count -1)}>decrement </button>
        //     <button onClick={()=> setcount(count +1)}>increment</button>
        // </div>
        <div>
            <button onClick={() => setclick('london')}>london</button>
            <button onClick={() => setclick('america')}>america</button>
            <button onClick={() => setclick('turkey')}>turkey</button>
            <h1>here: {click}</h1>
            <div>
            
                    <div>
                        {/* {data?.map((item, index) => (
                            <div key={index}>
                                {item}
                            </div>
                        ))} */}
                        {data?.wind?.speed}
                    </div>
             
            </div>
        </div>
    )
}
// import React from 'react'

