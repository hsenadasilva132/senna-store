import '../../styles/loadingIcon.css';

import {
    FiSearch,
    FiShoppingBag,
    FiHeart,
    FiPackage,
    FiTruck,
    FiTag
} from 'react-icons/fi';

import {
    MdOutlineSportsSoccer
} from 'react-icons/md';

import { useEffect, useState } from 'react';

const LOADING_ICONS = [
    FiShoppingBag,
    MdOutlineSportsSoccer,
    FiSearch,
    FiHeart,
    FiPackage,
    FiTruck,
    FiTag
];

function LoadingIcon() {

    const [iconIndex, setIconIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIconIndex(current =>
                (current + 1) %
                LOADING_ICONS.length
            );
        }, 350);
        return () => clearInterval(interval);
    }, []);

    const Icon = LOADING_ICONS[iconIndex];


    return (
        <div className="loading-icon-wrapper">
            <div className="loading-icon">
                <Icon />
            </div>
        </div>
    );
}

export default LoadingIcon;