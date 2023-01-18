// import { useState } from 'react'
// import Output from './Output'



// function ImeiCheckBeta() {
//     // Declare state variables to store the order no and IMEI inputs 
//     // const url = ""
//     const [data, setData] = useState({
//         order:"",
//         imei: ""
//     })

//     // Declare function to handle the form submission
//     function handleSubmit(e) {
//         const newData = {...data}
//         newData[e.target.id] = e.target.value
//         setData(newData)
//         console.log(newData)
//         e.preventDefault();
//     }



//     return (
//         <div className="imei-check">
//             <h2>IMEI Check</h2>
//             <div className="input-box">
//                 <form onSubmit={handleSubmit}>
//                         <input
//                             placeholder="Order no"
//                             type="number"
//                             name="order-no"
//                         />
//                         <input
//                             placeholder="IMEI"
//                             type="number"
//                             name="imei"
//                         />
//                 </form>

                {/* <table>
                    <body>
                        <tr>
                            <td>
                                <input 
                                    placeholder="Order number"
                                    type="number"
                                    name="order-no"
                                    onChange={(e) => handleSubmit(e)}
                                />
                            </td>
                            <td>
                                <input 
                                    placeholder="IMEI"
                                    type="number"
                                    name="imei"
                                    onChange={(e) => handleSubmit(e)}
                                />
                            </td>
                            <button
                                onSubmit={}
                                type="submit" 
                                id="button"
                                >Check IMEI</button>
                        </tr>
                    </body>
                </table> */}
            // </div>
            // <Output />
        // </div>
    // );
// }
// export default ImeiCheck


/*

    <form>
        <input onChange={(e) => handle(e)} id="order" value={data.order} placeholder="Order number" type="number" required></input>
        <input onChange={(e) => handle(e)} id="imei" value={data.imei} placeholder="IMEI" type="number" required></input>
        <button type="submit" id="button">Check IMEI</button>
    </form>
            
*/




// V2



// function ImeiCheckPost() {
//     // Declare a state variable for storing the order no and IMEI inputs
//     const [orderNo, setOrderNo] = useState('');
//     const [imei, setImei] = useState('');

//     // Declare a state variable for storing the API response
//     const [response, setResponse] = useState(null);

//     // Define a function for handling the form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Send the POST request method to the API
//         // const apiKey = process.env.API_KEY
//         const res = await fetch(`https://api.prologmobile.com/api?key=${this.prologAPIKey}&version=2.0&service=5060&imei=${imei}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Prolog-API-key': 'bm4c7d16-d28a-4d65-b9ee-8bfb88f4005f'
//             },
//             body: JSON.stringify({imei}),
//         })

//         // Parse the response as JSON
//         const data = await res.json();

//         // Update the res state var with the parsed data
//         setResponse(data);
//     };

//     return (
//         <div>
//             {/* Render the form */}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="number"
//                     id="orderNo"
//                     placeholder="Order no"
//                     value={orderNo}
//                     onChange={(e) => setOrderNo(e.target.value)}
//                 /><br/>
//                 <input
//                     type="number"
//                     id="imei"
//                     placeholder="IMEI"
//                     value={imei}
//                     onChange={(e) => setImei(e.target.value)}
//                 />
//             </form>
//         </div>
//     )
// }

// export default ImeiCheckPost;


/*
class Prolog (
  constructor() {
    this.prologAPIKey = 'API_KEY';
    this.imei = imei;
  }
  async getIMEI(imei) {
    const imeiResponse = await fetch(`https://api.prologmobile.com/api?key=${this.prologAPIKey}&version=2.0&service=5060&imei=${imei}`);
    const imeiProfile = await imeiResponse.json();
    return {
      imeiProfile
    }
  }
) 

// Example file output format = 'order_3105565-imei_354565623696'
*/
