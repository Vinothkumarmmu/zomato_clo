import React from "react";
import QuickSearchItems from "./quicksearchitems";
import axios from 'axios';


 class QuickSearch extends React.Component{
    constructor(){
        super();
        this.state={
            mealtype:[]
        }

    }
    componentDidMount(){
        axios({
            method:'GET',
            url:'http://localhost:8900/getallmeal',
            headers:{'Content-Type':'application/json'}
        })
        .then(response=>{
            this.setState({mealtype: response.data.mealtypes})
        })
        .catch(err=>console.log(err));
    }
    render(){
        const {mealtype}=this.state;
        return(
            <div>
                <div className="grid">
                    <div className="content">
                        Quick Searches
                    </div>
                    <br />
                    <div className="con2">
                        Discover restaurant by meals
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-lg-3  row-cols-md-2 g-5">
                       
                       {mealtype.map((item,index)=>{
                       return <QuickSearchItems
                       key={index}
                       mealdata={item}
                       />
                            
                       })}

{/*                         
                       <QuickSearchItems img={img2} meals={"lunch"} describe={"Start your day with exclusive breakfast options"}/>
                       
                       
                       <QuickSearchItems img={img3} meals={"snakes"} describe={"Start your day with exclusive breakfast options"}/>
                       
                       
                       <QuickSearchItems img={img4} meals={"juices"} describe={"Start your day with exclusive breakfast options"}/>
                       
                       
                       <QuickSearchItems img={img5} meals={"dinner"} describe={"Start your day with exclusive breakfast options"}/>
                      
                       <QuickSearchItems img={img6} meals={"jam foods"} describe={"Start your day with exclusive breakfast options"}/> */}
                       
                    </div>
                    <br/><br/>

                </div>
                {/* <div className=" col d-grid gy-4 p-4">
                
                <QuickSearchItems img={img1} meals={"breakfast"} describe={"Start your day with exclusive breakfast options"}/>
                <QuickSearchItems img={img1} meals={"breakfast"} describe={"Start your day with exclusive breakfast options"}/>
                <QuickSearchItems img={img1} meals={"breakfast"} describe={"Start your day with exclusive breakfast options"}/>
                <QuickSearchItems img={img1} meals={"breakfast"} describe={"Start your day with exclusive breakfast options"}/>
                <QuickSearchItems img={img1} meals={"breakfast"} describe={"Start your day with exclusive breakfast options"}/>
                </div> */}
                {/* <div className="Row justify-content-evenly">

                    

                    
                    <div className="Col g-4 mx-3 Col-md-4 Col-lg-6 Col-xl-3">
                        <img src="./download (2).jpg" style={{height:"100%",width:"150px"}} />
                        <h5 className="head2">Lunch</h5>
                        <p>Start your day with exclusive br/eakfast options</p>

                    </div>
                    <div className="Col g-4 mx-3 Col-md-4 Col-lg-6 Col-xl-3">
                        <img src="./download.jpg" style={{height:"100%",width:"150px"}} />
                        <h5 className="head3">Snacks</h5>
                        <p>Start your day with exclusive br/eakfast options</p>

                    </div>
                    <div className="Col g-4 mx-3 Col-md-4 Col-lg-6 Col-xl-3">
                        <img src="./images (1).jpg" style={{height:"100%",width:"150px"}} />
                        <h5 className="head4">Dinner</h5>
                        <p>Start your day with exclusive br/eakfast options</p>

                    </div>
                    <div className="Col g-4 mx-3 Col-md-4 Col-lg-6 Col-xl-3">
                        <img src="./images (2).jpg" style={{height:"100%",width:"150px"}} />
                        <h5 className="head5">Drinks</h5>
                        <p>Start your day with exclusive br/eakfast options</p>

                    </div>
                    <div className="Col g-4 mx-3 Col-md-4 Col-lg-6 Col-xl-3">
                        <img src="./images.jpg" style={{height:"100%",width:"150px"}} />
                        <h5 className="head6">Nightlife</h5>
                        <p>Start your day with exclusive br/eakfast options</p>
                    </div> */}
                {/* </div> */}
            </div>
        )
    }
 }
 export default QuickSearch;