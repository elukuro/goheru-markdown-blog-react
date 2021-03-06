import {
    Link,
  } from "react-router-dom";
  
function UirenderBackToHome(props){
    if(!props.isHomepage){
        return(
            <Link to="/" className="text-xs underline text-blue-600 antialiased ">Back to home 🏠</Link>
        )
    }
    return(
        <a className="text-xs underline text-blue-600 antialiased " href="http://goheru.com">Back to goheru 🏠</a>
    )
}
function Header(props) {
    const heading = "<DevTips/>"
    return(
        <div className="mt-10 mb-10 container mx-auto max-w-lg">
            <h1 className="text-6xl orange font-extrabold">{heading}</h1>
            <div className="flex mt-5 justify-between items-end">
                <span className="text-1xl">By goheru 🐫</span>
                <UirenderBackToHome isHomepage={props.isHomepage}/>
            </div>
        </div>
    )
}

export default Header;