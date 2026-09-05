import '../../styles/Toast.css';
import {
    FiCheckCircle,
    FiAlertCircle,
    FiInfo
} from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


function Toast({ message, type }) {

    
    const icons = {
        success: <FiCheckCircle />,
        error: <FiAlertCircle />,
        info: <FiInfo />
    };

    const toastRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            toastRef.current,
            {
                x: 80,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: .5,
                ease: "power2.out"
            }
        );
        
        const timeout = setTimeout(() => {
            gsap.to(toastRef.current, {
                x: 80,
                opacity: 0,
                duration: 3
            })
        }, 3000);

        return () => clearTimeout(timeout)
    }, []);
    
    return (
        <div ref={toastRef} className={`toast ${type}`}>
            <span className='toast-icon'>
                {icons[type]}
            </span>

            <p>{message}</p>

        </div>
    )
}

export default Toast;