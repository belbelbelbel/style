import axios from 'axios';
import React, { useState, useEffect } from 'react'

export const Effect = () => {
    // const [windowsize,setwindowsize] = useState(window.innerWidth)

    // function handleresize() {
    //     setwindowsize(window.innerWidth)
    // }

    // useEffect(() => {
    //    window.addEventListener('resize',handleresize)
    // }, [])

    const [data, setdata] = useState([]);
    const [text, settext] = useState("")
    const [click, setclick] = useState('post')

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/${click}`);
                const time = res.data;
                setdata(time);
            } catch (error) {
                console.log("the error messaage is: " + error)
            }
        }
        fetchdata();
    }, [click])

    return (
        <div>
            {/* <h1>{windowsize}</h1> */}
            <input type="text" value={text} onChange={(e) => settext(e.target.value)} />
            <button onClick={() => setclick('posts')}>post</button>
            <button onClick={() => setclick('comments')}>comments</button>
            <button onClick={() => setclick('posts')}>users</button>
            <div>{click}</div>
            {
                Array.isArray(data) ?
                data.map((item) => (
                    <div key={item.id}>
                        {JSON.stringify(item)}
                    </div>
                )):<div>ihkeajgfashdlckjlasa;lkdh</div>
            }
        </div>
    )
}
