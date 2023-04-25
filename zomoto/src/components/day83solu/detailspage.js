import React from "react";
import 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/styles/detailspage.css';
import img6 from 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/asserts/detail.jpg'
import img from 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/asserts/South.jpg'
import img1 from 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/asserts/india.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import queryString from 'query-string';
import axios from "axios";

class DetailsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurant: {}
        }
    }

    componentDidMount() {
        const qs = queryString.parse(window.location.search);
        let { restaurant } = qs;

        axios({
            method: 'GET',
            url: `http://localhost:8900/getallrest1/${restaurant}`,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ restaurant: response.data.Restaurants })
            })
            .catch(err => console.log(err));
    }
    render() {
        const { restaurant } = this.state;
        console.log(restaurant);
        return (

            <div>
                <br/>

                <div className="contanier-fluid box1">
                    <h1>Details</h1>
                    <Carousel showThumbs={false}>
                        <div>
                            <img src={(img6)} alt={"img not found"} className="img1" />
                        </div>
                        <div>
                            <img src={img} alt={"img not found"} className="img1" />
                        </div>
                        <div>
                            <img src={img1} alt={"img not found"} className="img1" />
                        </div>
                    </Carousel>

                    {Object.values(restaurant).map(restaurant=>{
                     return <div>
                        <h1 className="h1">{restaurant.name}</h1>
                        <button className="btn btn-danger bn">Place Online Order</button>
                        <Tabs className="tabs">
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <h3>Overview:</h3>
                                <h6>Previous Next
                                    View Larger Image
                                    The restaurant industry is one of the largest components of the hospitality industry and is focused on providing food services where customers are able to order food and eat it on the premises</h6>
                                <h4>Review:</h4>
                                <h6>{restaurant.rating_text}</h6>
                                {/* <h3>cuisine:</h3>
                                <h6>{restaurant.cuisine}</h6> */}
                                
                            </TabPanel>
                            <TabPanel>
                                <h3>Phone number</h3>
                                <h6>{restaurant.contact_number}</h6>
                                <br />
                                <h3>{restaurant.name}</h3>
                                <h6>{restaurant.city}</h6>
                                <h4>Rating:</h4>
                                <h6>{restaurant.aggregate_rating}%</h6>
                            </TabPanel>
                        </Tabs>
                    </div> })}
                    <br />
                </div>
                <br /><br />

            </div>
        )
    }
}
export default DetailsPage;