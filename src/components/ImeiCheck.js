import { useState, useEffect } from 'react';

const cors = require('cors')

const prologAPIKey = 'API_KEY'
const ImeiCheck = () => {
    // Declare state vars to store the inputs
    const [data, setData] = useState([])
    const [orderNo, setOrderNo] = useState('')
    const [imei, setImei] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        fetch(`https://api.prologmobile.com/api?key=${prologAPIKey}&version=2.0&service=5060&imei=${imei}`, {
            // mode: 'cors',
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
    }

    // const handleClickTest = () => {
    //     console.log('IT WORKS!')
    // }

    // AXIOS
    // const fetchData = async() => {
    //     const response = await axios.get(`https://api.prologmobile.com/api?key=${prologAPIKey}&version=2.0&service=5060&imei=${imei}`,
    //     // {headers: {
    //     //     'prologAPIKey': 'API_KEY'
    //     // }}
    //     )

    //     const fetchedData = response.data;
    //     setData(fetchedData);
    //     console.log(fetchedData);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [imei]);

    return (
        <div className='imei-check'>
            <h1>IMEIer</h1><p>by Back Market</p>
        {/* Render the form */}
        <form onSubmit={handleClick}>
            <input
                type='number'
                id='orderNo'
                className='order-no'
                placeholder='Order no'
                value={orderNo}
                onChange={(e) => setOrderNo(e.target.value)}
            /><br/>
            <input
                type='number'
                id='imei'
                className='imei'
                placeholder='IMEI'
                value={imei}
                onChange={(e) => setImei(e.target.value)}
            />
        </form>
        <button
                type='submit' 
                id='button'
                className='button'
                onClick={handleClick}
            >Check IMEI
            </button>
            <br/>
            <br/>
            <p>API thanks to PrologMobile</p>
        {/* Display the data that was fetched from the API */}
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
    )
}

export default ImeiCheck;
