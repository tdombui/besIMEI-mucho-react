const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.static('public'))

// Enable CORS for all routes - SANDBOX ONLY
app.use(
    cors({
        origin: '*'
    })
);

app.get(get)

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

    const port = PORT_VALUE;
app.listen(port, () => {
    console(`Server is running on http:localhost:${port}`)
})
