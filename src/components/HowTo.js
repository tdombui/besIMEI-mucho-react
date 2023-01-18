const HowTo = () => {
    return (
        <div className="how-to">
            <h2>How to use this tool</h2>
            <ul>
                <li className="how-to-p">IMEI always begins with the number 3</li>
                <li className="how-to-p">IMEI is always 15-digits long</li>
                <li className="how-to-p">This tool will accept the IMEI of any device brand; i.e., Apple, Samsung, Google, etc.</li>
                <li className="how-to-p">An IMEI check can take about 5-10 seconds to output results</li>
                <li className="how-to-p">Send feedback directly to dominick.bui@backmarket.com</li>
            </ul>
            <br/>
            <h3>Expected output</h3>
            <ul>
                <li className="how-to-p">Blocklist status</li> 
                <li className="how-to-p">Manufacturer</li> 
                <li className="how-to-p">Make</li> 
                <li className="how-to-p">Model</li> 
                <li className="how-to-p">Serial number</li> 
                <li className="how-to-p">Carrier</li> 
                <li className="how-to-p">Intended Carrier</li> 
                <li className="how-to-p">Memory</li> 
                <li className="how-to-p">Color</li> 
                <li className="how-to-p">SIM lock</li> 
                <li className="how-to-p">FMIP - Apple only</li> 
                <li className="how-to-p">Country of Origin - COO</li> 
                <li className="how-to-p">AT&T, T-Mobile, Verizon status</li> 
                <li className="how-to-p">IMEI history</li> 
            </ul>
        </div>
    );
}
export default HowTo