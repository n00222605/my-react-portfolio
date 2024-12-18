import { useLocation } from "react-router-dom";

const PageNotFound = () => {

    let location = useLocation();
    console.log('use loa')
    return(
        <p>Sorry the page {location.pathname} is not found</p>
    )
}

export default PageNotFound;