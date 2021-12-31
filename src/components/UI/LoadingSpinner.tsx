import {faRainbow} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LoadingSpinner = () => {
    return <FontAwesomeIcon icon={faRainbow} className='fa-spin'/>;
}

export default LoadingSpinner;
