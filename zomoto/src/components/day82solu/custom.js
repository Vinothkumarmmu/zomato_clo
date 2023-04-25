import React from "react";
 import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
//   import Wallpaper from "./wallpaper";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      console.log(props);
      return (
        <Component
          {...props}
         
          router={{ location, navigate, params }}
          
        />
      );
    }
  
    return ComponentWithRouterProp;
  }
  export default withRouter;