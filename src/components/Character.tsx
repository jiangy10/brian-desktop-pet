// import { getStatus } from '../functions/actions';
import { Status } from '../models';
import { useState, useEffect, useRef} from 'react';
import './Character.css';
import { researchCycleLeft, researchEndLeft, researchStartLeft, standLeft } from "../contants";

export default function Character(): React.JSX.Element {
    const [status, setStatus] = useState<Status>(researchStartLeft);
    const [position, setPosition] = useState<number>(0);
    const nextStatusRef = useRef(researchCycleLeft);

    useEffect(() => {
        //@ts-ignore
        const preloadImage = (src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
            });
        };

        const changeStatus = async () => {
            await preloadImage(nextStatusRef.current.src);
            setStatus(nextStatusRef.current);
        };

        const timeoutId = setTimeout(changeStatus, 850);

        return () => clearTimeout(timeoutId);
    }, [status]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         //get randomly from status.nextStatuses
    //         const nextStatus = status.nextStatuses[Math.floor(Math.random() * status.nextStatuses.length)];
    //         setStatus(nextStatus);
    //         console.log(nextStatus);
    //         // const intervalId = setInterval(() => {
    //         //     if (newStatus.speed){
    //         //         const newPosition = position + newStatus.speed;
    //         //         setPosition(newPosition);
    //         //     }
    //         // }, newStatus.duration / 10)
    //     }, status.duration)
    // }, [status])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setStatus(researchCycleLeft);
    //     }, 900);
    // },[])

    return (
        <div className={"container"}>
            {/* dock length: 100px - 1250px */}
            <img src={status.src} className={"character"} alt={"loading"} style={{ left: 700 + position }}></img>
        </div>);
}