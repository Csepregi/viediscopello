import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from '@remix-run/react';


export default function Footer() {

  return  (
    <div className="bg-blue footer">
        <div className="max-w-2xl mx-auto text-white py-5">
            <div className="text-center">
                <h3 className="text-3xl mb-3"> Contattaci </h3>
                <p> viediscopello@gmail.com </p>
                <div className="flex justify-center my-5">
                    <div className="flex items-center  w-auto rounded-lg py-2 px-4  w-52 mx-2">
                    <Link to="https://www.instagram.com/viediscopello/"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
                    </div>
                    <div className="flex items-center  w-auto rounded-lg py-2 px-4  w-44 mx-2">
                    <Link to="https://www.facebook.com/viediscopello"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
