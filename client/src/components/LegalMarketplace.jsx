import './legal_marketplace.css'
import logo from  '../Assets/ellipse-3.png'
function LegalMarketplace()
{
    return (
        <div className="legal">
            <div className="op1">
            <label>
                What are you loooking for
                <br/>
                <select className="bg-gray-100 w-72">
                <option>Mediator</option>
                <option>Notary</option>
                <option>Law Advisor</option>
                <option>Lawyer</option>
                </select>
            </label>

            <label>
                Preferred Location
                <br/>
                <select className="bg-gray-100 w-72">
                <option >Lucknow , Uttar Pradesh</option>
                <option>Patna , Bihar</option>
                <option>Bengaluru , Karnataka</option>
                <option>Mumbai , Maharashtra</option>
                </select>
            </label>
            </div>
            
            <div className="op2">
            <label>
                Specialization
                <br/>
                <select className="bg-gray-100 w-72">
                <option >Domestic Cases</option>
                <option>Property Cases</option>
                <option>Cyber Crime</option>
                <option>Civil Cases</option>
                </select>
            </label>


            <label>
                Price Range
                <br/>
                <select className="bg-gray-100 w-72">
                <option >10,000-20,000</option>
                <option>20,000-40,000</option>
                <option>40,000-1,00,000</option>
                <option>1,00,000 +</option>
                </select>
            </label>
            </div>


            <div className="lawopt">
               <div className="pr1">
               <img  className="w-16 h-16 mx-2" src={logo} alt="profile1"/>
                <div>
                    <div className=" name">Mr. ABCD</div>
                    <div className="name-desc">Lawyer , 5 years experience , Lucknow</div>
                </div>

                <button className="btn h-8 bg-green-600 w-20 my-4">Book</button>
                </div>

            <div className="pr2">
                <img  className="w-16 h-16 mx-2" src={logo} alt="profile1"/>
                <div>
                    <div className=" name">Mr. ABCD</div>
                    <div className="name-desc">Lawyer , 5 years experience , Lucknow</div>
                </div>

                <button className="btn h-8 bg-green-600 w-20 my-4">Book</button>
            </div>


            </div>
        </div>
    )
}
export default LegalMarketplace;