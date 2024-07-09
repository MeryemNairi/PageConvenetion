import * as React from 'react';
import  { useEffect, useRef } from 'react';
//import styles from './CommPage.module.scss';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import Footer from './Footer/footer';
import Navbar from './Header/navbar';
import Convention from './convention/Convention';

const CommPage: React.FC<{ context: WebPartContext }> = ({ context }) => {
    const [showSavoirPlus, setShowSavoirPlus] = React.useState(false);
    const savoirPlusRef = useRef<HTMLDivElement>(null);

  

    const handleClickOutside = (event: MouseEvent) => {
        if (savoirPlusRef.current && !savoirPlusRef.current.contains(event.target as Node)) {
            setShowSavoirPlus(false);
        }
    };

    useEffect(() => {
        if (showSavoirPlus) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSavoirPlus]);

    return (
        <div >
            <Navbar />
            <Convention  />
            <Footer />
        </div>
    );
};

export default CommPage;