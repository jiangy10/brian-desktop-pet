import stand from '../images/stand.png';
import './Character.css';

export default function Character(): React.JSX.Element {
    return (
    <div>
        <img src={stand} className={"character"} />
    </div>);
}