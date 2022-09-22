import React,{Component} from "react";
import {FontAwesomeIcon, fontawesomeIcon} from "@fortawesome/react-fontawesome";
class Contact extends Component{
    render(){
        return(
            <div >
                <h2 id="contactme"> Contact me for more information on Twitter and Linkedin</h2>
               <div id="symbol">
                <FontAwesomeIcon icon={["fab","twitter"]} size="2x"/>
                <a  href="https://twitter.com/home"> Twitter <br/></a>

                <FontAwesomeIcon icon={["fab","linkedin"]} size="2x"/>
                <a href="https://www.linkedin.com">Linkedin</a>
              </div>
                
            </div>

        )

    }
}
export default Contact;