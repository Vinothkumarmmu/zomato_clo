import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import 'C:/Users/vinoth/vinoth/day82/zomoto/node_modules/font-awesome/css/font-awesome.min.css'
import axios from "axios";
import 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/styles/drop.css'
import { useNavigate } from "react-router-dom";


function Wallpaper(props) {
  const [wallpaper,setWallpaper]= useState({
    restaurants: [],
    inputText: '',
  });

  let [text,setText]=useState('')

  let [suggestions,setSuggestions]= useState([])
        
  const  handleLocation = (event) => {
        const locationId = event.target.value;

        axios({
            method: 'GET',
            url: `http://localhost:8900/getallrest/${locationId}`,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                setWallpaper({ restaurants: response.data.Restaurants });
                
            })
            .catch(err => console.log(err));
            
    }
    //  console.log(wallpaper.restaurants);

    const handleSearch = (event) => {
        setText(event.target.value);
        //console.log(inputText1);
        // const { restaurants } = this.state;
        let sug1 = wallpaper.restaurants.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        console.log(sug1);
        setSuggestions(sug1);
        //setText(inputText1)
        console.log(suggestions);
        //setWallpaper(inputText);
    }
    // console.log(wallpaper.suggestions);
    
    // console.log(sug);
    // console.log(wall);
    // console.log(wallpaper.inputText);
    const db = useNavigate();
    let selectingRest=(resObj)=>{
        // const {router}= this.props;
        return db(`/details?restaurant=${resObj._id}`);
    }
 const showSuggestion = () => {
    // let sug;
   // let wall=wallpaper.inputText;

        // const { suggestions, inputText } = useState;
        // let len=wallpaper.suggestions.length;
        // console.log(len);

        //console.log(suggestions,wall);
        
        if (suggestions.length == 0 && text == undefined) {
            return null;
        }
        else if (suggestions.length > 0 && text == '') {
            return null;
        }
        else if (suggestions.length == 0 && text) {
            return <div className="listing">No Search Results Found</div>
        }

        // setSuggestions({sug:suggestions})
        else{
        return (
            <ul>
                {
                    suggestions.map((item, index) => 
                    <li className="listing" key={index} onClick={() =>selectingRest(item)}>
                        {`${item.name} -   ${item.locality},${item.city}`}
                    </li>)
                }
            </ul>
        )}
    }
   
        return (
            
            <div>
                <div id="img" className="img-fluid">
                    {/* <div className="buttons">
                        <Button className="loginbutton btn" variant="primary">login</Button>
                        <Button className="createbutton btn" variant="primary">create an account</Button>
                    </div> */}
                    <div className="logo">
                        vk
                    </div>
                    <br />
                    <h1 className="hi">Find the best restaurant, cafes, and bars</h1>
                    <br />
                    <div className="search" >
                        <Col xl={6} lg={4} md={6} sm={12}></Col>

                        {/* <input type="text" list="cities" placeholder="please type your location " /> */}
                        {/* <Form.Select aria-label="Default select example"></Form.Select> */}
                        <select id="cities" onChange={handleLocation}>
                            <option value="0">Select</option>
                            {props.locationdata.map((items) => {
                                return <option value={items.location_id}>{`${items.name}, ${items.city}`}</option>
                            })}
                            </select>
                            {/* <option value={items.location_id}>{`${items.name}, ${items.city}`}</option>
                            <option>Bangalore </option>
                            <option>Chennai </option>
                            <option>Delhi </option>
                            <option>Kolkata </option>
                            <option>Mumbai </option>
                            <option>Coimbatore </option> */}
                        
                        {/* <i class="fa-light fa-magnifying-glass"></i> */}
                        
                        <input className="awesome fa-light fa-magnifying-glass" onChange={handleSearch} type="text" placeholder=" Type a Restaruant " />
                        {showSuggestion()}

                    </div>
                </div>
            </div>
        )
    }

export default Wallpaper;