import React from "react";
import img1 from 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/asserts/umk8i7ko_pasta_625x300_01_April_21.jpg'
import 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/styles/filterpage.css';
import axios from "axios";


class FilterPage extends React.Component {
    constructor(){
        super();
        this.state={
            location:[],
            restaurants:[]
        }
    }
    
    componentDidMount(){
        axios({
            method:'GET',
            url:'http://localhost:8900/getallloc',
            headers:{'Content-Type':'application/json'}
        })
        .then(response=>{
            this.setState({location: response.data.locations})
            
        })
        .catch(err=>console.log(err));
        
    }
    handleLoc=(event)=>{
        const locationId = event.target.value;

        axios({
            method: 'GET',
            url: `http://localhost:8900/getallrest/${locationId}`,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ restaurants: response.data.Restaurants });
                
            })
            .catch(err => console.log(err));
            
    }
    
    
    render() {
        const {location,restaurants}=this.state;
        console.log(location);
        console.log(restaurants);
        return (
            
            <div>
                {/* <div className="container-fluid head">
                    <div className="box">e!</div>
                    <button className="btn btn-light">login</button>
                    <button className="btn btn-light">Create an Account</button>
                </div> */}
                <h1 className="text">Breakfast places in Coimbatore...</h1>
                <div className="container bx">
                    <div className="filter">
                        <h4>Filter</h4>
                        <select id="city" onChange={this.handleLoc}>
                            <option value="0">Select</option>
                            {location.map((items) => {
                                return <option value={items.location_id}>{`${items.name}, ${items.city}`}</option>
                            })}
                            </select>
                        {/* <input type="text" list="city" placeholder="Select Location" />
                        <datalist id="city">
                            <option>kochin</option>
                            <option>Munmbai</option>
                            <option>Bangalore</option>
                            <option>Chennai</option>
                            <option>Coimbatore</option>
                            <option>Kolkata</option>
                            <option>Pune</option>
                            <option>Goa</option>
                            <option>Thirchy</option>
                            <option>Madurai</option>
                            <option>Salem</option>
                        </datalist> */}
                    </div>
                    <div className="cussins d-none d-md-none d-lg-block">
                        <h3 className="selectpart">cuisine</h3>
                        <input type="checkbox" /> North Indians<br />
                        <input type="checkbox" /> South Indians <br />
                        <input type="checkbox" /> Chinses<br />
                        <input type="checkbox" /> Fast food<br />
                        <input type="checkbox" /> Street food<br />
                        <br />
                        <h3 className="selectpart">Cost for two</h3>
                        <input type="radio" /> Less than &#8377;500<br />
                        <input type="radio" /> &#8377;500 to &#8377;1000<br />
                        <input type="radio" /> &#8377;1000 to &#8377;1500<br />
                        <input type="radio" /> &#8377;1500 to &#8377;2000<br />
                        <input type="radio" /> &#8377;2000+<br />
                        <br />
                        <h3 className="selectpart">Sort</h3>
                        <input type="radio" /> Price Low to High<br />
                        <input type="radio" /> Price High to Low<br />
                    </div>
                    <div className="container gt">
                        <div className="row row-cols-1 g-2 my-3">
                            {restaurants.map((a,i)=>{
                              return <div className="col g-1 mx-1 con">
                                <img src={img1} alt={"img not found"} className="img" />
                                <span className="sub">
                                    <h2>{a.name}</h2>
                                    <br />
                                    <h4>{a.city}</h4>
                                    <h6>{a.location_id} . {a.locality} .{a.contact_number}</h6>
                                    <hr />
                                    <h6>CUISINES: {a.cuisine[0]["name"]}</h6>
                                    <h6>COST FOR TWO: &#8377; {a.min_price}</h6>
                                    <h6>Rating: {a.aggregate_rating}</h6>
                                </span>
                            </div>
                            })}
                            {/* <br />
                            <br />
                            <div className="col con">
                                <img src={img1} alt={"img not found"} className="img" />
                                <span className="sub">
                                    <h2>Breakfast</h2>
                                    <br />
                                    <h4>Ford</h4>
                                    <h6>shop no.2,Linga street,R.S puram,Coimbatore</h6>
                                    <hr />
                                    <h6>CUISINES: Bakery</h6>
                                    <h6>COST FOR TWO: &#8377; 700</h6>
                                </span>
                            </div> */}
                        </div>
                        <div className="btn-group bttn">
                            <a href="#" className="btn btn-light active">previous</a>
                            <a href="#" className="btn btn-light">1</a>
                            <a href="#" className="btn btn-light">2</a>
                            <a href="#" className="btn btn-light">3</a>
                            <a href="#" className="btn btn-light">4</a>
                            <a href="#" className="btn btn-light">5</a>
                            <a href="#" className="btn btn-light">next page</a>
                        </div>
                    </div>
                </div>

            </div>)
    }
}
export default FilterPage;