
import { getStatus } from '../functions/actions';
import { Status } from '../models';
import { useState, useEffect } from 'react';
import './Character.css';
import { standLeft } from "../contants";

export default function Character(): React.JSX.Element {
    const [status, setStatus] = useState<Status>(standLeft);

    useEffect(() => {
        setTimeout(()=>{
            const newStatus = getStatus();
            setStatus(newStatus);
            // console.log(newStatus);
        }, status.duration)
    }, [status])

    return (
        <div>
            something here
        </div>);
}