import { getStatus } from '../functions/actions';
import { Status } from '../models';
import { useState, useEffect } from 'react';
import './Character.css';
import { standLeft } from "../contants";

export default function Character(): React.JSX.Element {
    const [status, setStatus] = useState<Status>(standLeft);
    const [position, setPosition] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            const newStatus = getStatus(status);
            setStatus(newStatus);
            // const intervalId = setInterval(() => {
            //     if (newStatus.speed){
            //         const newPosition = position + newStatus.speed;
            //         setPosition(newPosition);
            //     }
            // }, newStatus.duration / 10)
        }, status.duration)
    }, [status])

    return (
        <div className={"container"}>
            {/* dock length: 100px - 1250px */}
            <img src={status.src} className={"character"} alt={"loading"} style={{ left: 700 + position }}></img>
        </div>);
}