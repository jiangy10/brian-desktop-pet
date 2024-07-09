import standRight from '../images/stand-right.png';
import standLeft from '../images/stand-left.png';
import { getStatus } from '../functions/actions';
import { Status } from '../models';
import './Character.css';

export default function Character(): React.JSX.Element {
    const status: Status = getStatus();
    console.log(standLeft, typeof standLeft);
    return (
        <div>
            something here
        </div>);
}