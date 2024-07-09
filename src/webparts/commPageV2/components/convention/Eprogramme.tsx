import * as React from 'react';
import { sp } from '@pnp/sp/presets/all';
import styles from './Convention.module.scss';
import { useState, useEffect } from 'react';

interface HotelProps {
    name: string;
    imageUrl: string;
}

const Hotel: React.FC<HotelProps> = ({ name, imageUrl }) => {
    return (
        <div className={styles.hotel}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imageUrl} alt={name} />
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

const Convention: React.FC = () => {
    const [images, setImages] = useState<{ name: string; imageUrl: string; }[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToPrevSlide = () => {
        const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await sp.web.getFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets/EprogrammeSlide').files.get();
                const hotelImages = response.map(file => ({
                    name: file.Name,
                    imageUrl: file.ServerRelativeUrl
                }));
                setImages(hotelImages);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);



    const hotels = [

        { name: "SUMSUNG", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'SUMSUNG.jpg\')/$value' },


        { name: "shiseido", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'shiseido.png\')/$value' },


        { name: "NESPRESSO", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'NESPRESSO.jpg\')/$value' },

        { name: "DYSON", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'DYSON.png\')/$value' },

        { name: "SteamOne", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'SteamOne.jpg\')/$value' },

        { name: "crockpot", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'crockpot.png\')/$value' },

        { name: "foodsaver", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'foodsaver.jpg\')/$value' },

        { name: "brabantia", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'brabantia.jpg\')/$value' },

        { name: "oster", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'oster.png\')/$value' },

        { name: "lenovo", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'lenovo.png\')/$value' },

        { name: "irobot", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'irobot.jpg\')/$value' },

        { name: "logitech", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'logitech.png\')/$value' },

        { name: "taurus", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'asus.png\')/$value' },

        { name: "dercos", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'dercos.png\')/$value' },

        { name: "solac", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'solac.png\')/$value' },


        { name: "mellerware", imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets/Eprogramme\')/Files(\'mellerware.jpg\')/$value' },

    ];

    return (
        <div className={styles.EpContainer}>
            <a href="https://eProgram.ma"
                style={{
                    color: 'blue',
                    textDecoration: 'underline',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    display: 'block',
                    width: '100%',
                    marginBottom: '40px'

                }}>
                eProgram.ma
            </a>
            <h2 style={{ textAlign: 'center' }}>Nos Conventions actives</h2><br />

            <div className={styles.ImageContainer} style={{ marginBottom: '40px' }}>
                <div className={styles.image_holder}>
                    <img src={images.length > 0 ? images[currentIndex].imageUrl : ''} alt="Slide" />
                </div>
                <div className={styles.Navigation_btn}>
                    <button className={styles.prevBtn} onClick={goToPrevSlide}>
                        <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.74178 20.4324L0.309099 14.1945C-0.103029 13.7948 -0.10303 13.2051 0.309098 12.8055L12.7412 0.749781C13.517 -0.00247461 15 0.453514 15 1.44429L15 12.1741L6.74178 20.4324Z" fill="white" />
                            <path opacity="0.5" d="M15 14.8258L15 25.5557C15 26.5465 13.517 27.0024 12.7412 26.2502L8.08798 21.7378L15 14.8258Z" fill="white" />
                        </svg>
                    </button>
                    <button className={styles.nextBtn} onClick={goToNextSlide}>
                        <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.25822 6.56763L14.6909 12.8055C15.103 13.2052 15.103 13.7949 14.6909 14.1945L2.25876 26.2502C1.48301 27.0025 4.33083e-08 26.5465 0 25.5557V14.8259L8.25822 6.56763Z" fill="white" />
                            <path opacity="0.5" d="M4.47035e-07 12.1742L0 1.44432C-4.33083e-08 0.45354 1.48301 -0.00244924 2.25875 0.749806L6.91202 5.26216L4.47035e-07 12.1742Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>

            <div style={{ lineHeight: '1.6' }}>
                <h3>Définition de la Convention :</h3><br />
                <p style={{ marginBottom: '20px' }}>La plateforme eProgram.ma regroupe l’ensemble de nos conventions et vous offre  de multiples avantages. Vous allez adorer tout ce que vous y trouverez : une large gamme de produits et de services exclusifs à des prix conventionnés, plus de 50 marques de renom et 30 000 références de produits et services.
                </p>
                <p style={{ marginBottom: '20px' }}>eProgram.ma vous offre une interface conviviale vous permettant de découvrir les conventions et tous les avantages qui vous sont réservés.
                </p>

                <h3>Avantages offerts :</h3><br />
                <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginBottom: '20px' }}>
                    <li>Simplicité d’utilisation : Accédez aux informations sur les conventions et les prix conventionnés à tout moment </li>
                    <li>Une panoplie de choix : Le catalogue eProgram compte un large éventail de marques de plusieurs catégories et types de produit pour répondre à vos besoins quotidiens ; (Téléphonie, objets connectés, TV & accessoires, cuisine, bien être & beauté et bien plus)</li>
                    <li>Différents moyens de paiement + Facilité de paiement allant jusqu’à 4 mensualités en crédit gratuit </li>
                    <li>Une assistance en ligne </li>
                </ul>
            </div>


            <div className={styles.space}></div>
            <div className={styles.hotelsContainer}>
                {hotels.map((hotel, index) => (
                    <Hotel key={index} name={hotel.name} imageUrl={hotel.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default Convention;
