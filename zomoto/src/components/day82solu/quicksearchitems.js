import React from "react";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Stack from 'react-bootstrap/Stack';
// import QuickSearch from "./quicksearch";
// import { getAllMealTypes } from "../../../../controller/mealty";
//import im1 from '../../asserts/download.jpg';
import { useNavigate } from "react-router-dom";

let QuickSearchItems =(props)=>  {
      let {name,image,content,meal_type}= props.mealdata;
      const db = useNavigate();

      function handleNavigate(mealTypeId){
        return db(`/filter?mealtype=${mealTypeId}`);
     }
        
        return (
            <div>
                {/* <Row>
                        <Col md={4} lg={6} xl={3}>
                            
                        </Col>
                    </Row> */}
                
                {/* <div className="row d-flex justify"> */}
          
                  <div className="col">
                  <div className="column col g-4 mx-3 col-md-4 col-lg-6 col-xl-3"  onClick={()=>handleNavigate(meal_type)}>
                      <img src={`../../${image}`} style={{ height: "100%", width: "150px" }} alt={"img not found"}/>
                      <h5 className="head1">{name}</h5>
                      <p className="item1">
                          {content}
                      </p>
                      
                  </div>
              </div>
           
                
                {/* </div> */}
                 
               
            </div>
        )
    }

export default QuickSearchItems;