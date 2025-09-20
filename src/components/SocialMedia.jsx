import LinkedIn from "../assets/linkedin-icon.png";
import { Link } from "react-router-dom";
import { linkedin } from "../constants";

const SocialMedia = () => {
    return (
        <>
            <Link to={linkedin} target="_blank">
                <img className="w-5 h-5 sm:w-7 sm:h-7 cursor-pointer active:scale-95" src={LinkedIn} alt="linkedin" />
            </Link>
        </>
    );
};

export default SocialMedia;
