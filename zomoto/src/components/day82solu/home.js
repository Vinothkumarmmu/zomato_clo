import React from "react";
import QuickSearch from "./quicksearch";
import Wallpaper from "./wallpaper";
import Google from "../google";
import 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/styles/style.css';
// import Axios from 'axios';
import axios from "axios";


class Home extends React.Component {
    constructor(){
        super();
        this.state={
            location:[]
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
    
    render() {
        const {location}=this.state;
        // console.log(location);
        return (

            <div>
                <Wallpaper locationdata={location}/>
                {/* <Google/> */}
                {/* <br /> */}
                <QuickSearch/>
                
            </div>

        )
    }
}

export default Home;