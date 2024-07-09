import { getStatus } from '../functions/actions';
import move_left from '../images/move/move_left.gif';
import research_left from '../images/research/research_left.gif';
import { Status } from '../models';
import { useState, useEffect } from 'react';
import './Character.css';
import { standLeft } from "../contants";

export default function Character(): React.JSX.Element {
    const [status, setStatus] = useState<Status>(standLeft);

    useEffect(() => {
        setTimeout(()=>{
            const newStatus = getStatus(status);
            setStatus(newStatus);
        }, status.duration)
    }, [status])

    return (
        <div>
            <img src={status.src} className={"character"}></img>
        </div>);
}