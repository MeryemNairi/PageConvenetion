import * as React from 'react';
import styles from './Convention.module.scss';
import { FiveStars, FourStars, ThreeStars } from './stars';

interface HotelData {
    name: string;
    stars: number;
    imageUrl: string;
}

interface HotelsByCity {
    [key: string]: HotelData[];
}

const Hotel = ({ name, stars, imageUrl }: HotelData) => {
    const renderStars = () => {
        switch (stars) {
            case 5:
                return <FiveStars />;
            case 4:
                return <FourStars />;
            case 3:
                return <ThreeStars />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.hotel}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imageUrl} alt={name} />
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                {renderStars()}
            </div>
        </div>
    );
};

const HotelsVoyages: React.FC = () => {
    const hotelsByCity: HotelsByCity = {
        Tous: [
            { name: "The View Agadir", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AmadilBeachOcean.jpg\')/$value' },
            { name: "Amadil Beach Ocean", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RAmadilBeachOcean.jpg\')/$value' },
            { name: "Dunes d'Or Beach Club", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'DunesdOrBeaClub.jpg\')/$value' },
            { name: "The View Agadir", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AmadilBeachOcean.jpg\')/$value' },
            { name: "Amadil Beach Ocean", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RAmadilBeachOcean.jpg\')/$value' },
            { name: "Dunes d'Or Beach Club", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'DunesdOrBeaClub.jpg\')/$value' },
            { name: "Jaal Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RAmadilBeachOcean.jpg\')/$value' },
            { name: "Palais Medina Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'PalaisMedinaRiadResort.jpg\')/$value' },
            { name: "Atlas Essaouira Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AtlasEssaouiraRiadResort.jpg\')/$value' },
            { name: "Atlas Volubilis", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'hotel-volubilis.jpg\')/$value' },
            { name: "Terminus City Center", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Terminus-City-Center-Oujda-Exterior.jpg\')/$value' },
            { name: "Atlas Orient", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AtlaOrient.jpg\')/$value' },
            { name: "Marina Bay City Center", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Terrassevuemer.jpg\')/$value' },
            { name: "Relax Hotel", stars: 3, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Relax-Hôtel-Kenitra3-768x512.jpg\')/$value' },
            { name: "Sky Casa Airport", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'atlas-sky-airport.jpg\')/$value' },

        ],
        Agadir: [
            { name: "The View Agadir", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AmadilBeachOcean.jpg\')/$value' },
            { name: "Amadil Beach Ocean", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RAmadilBeachOcean.jpg\')/$value' },
            { name: "Dunes d'Or Beach Club", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'DunesdOrBeaClub.jpg\')/$value' },
        ],
        Marrakech: [
            { name: "Jaal Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RAmadilBeachOcean.jpg\')/$value' },
            { name: "Palais Medina Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'PalaisMedinaRiadResort.jpg\')/$value' },
        ],
        Fes: [
            { name: "Atlas Essaouira Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AtlasEssaouiraRiadResort.jpg\')/$value' },
            { name: "Atlas Volubilis", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'hotel-volubilis.jpg\')/$value' },
        ],
        Oujda: [
            { name: "Terminus City Center", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Terminus-City-Center-Oujda-Exterior.jpg\')/$value' },
            { name: "Atlas Orient", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AtlaOrient.jpg\')/$value' },
        ],
        Tanger: [
            { name: "Marina Bay City Center", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Terrassevuemer.jpg\')/$value' },
        ],
        Kenitra: [
            { name: "Relax Hotel", stars: 3, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Relax-Hôtel-Kenitra3-768x512.jpg\')/$value' },
        ],
        Casablanca: [
            { name: "Sky Casa Airport", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'atlas-sky-airport.jpg\')/$value' },
            { name: "Relax Casa Voyageurs Hotel", stars: 3, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RelaxCasaoyageursHotel.jpg\')/$value' },
        ],
    };

    const [selectedCity, setSelectedCity] = React.useState<string>('Tous');

    const handleCityChange = (city: string) => {
        setSelectedCity(city);
    };

    return (
        <div style={{ marginBottom: '40px' ,maxWidth: '1288px', margin: '0 auto'}}>

            <div style={{ marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '40px' }}>1. Conventions hôtelières: </h3>
                <br />
                <div className={styles.buttonsContainer}>
                    <button className={styles.cityButton} onClick={() => handleCityChange('Tous')}>Tous</button>
                    <button className={styles.cityButton} onClick={() => handleCityChange('Agadir')}>Agadir</button>
                    <button className={styles.cityButton} onClick={() => handleCityChange('Marrakech')}>Marrakech</button>
                    <button className={styles.cityButton} onClick={() => handleCityChange('Fes')}>Fes</button>
                    <button className={styles.cityButton} onClick={() => handleCityChange('Oujda')}>Oujda</button>
                    <button className={styles.cityButton} onClick={() => handleCityChange('Tanger')}>Tanger</button>
                    <button className={styles.cityButton} onClick={() => handleCityChange('Kenitra')}>Kenitra</button>
                    <button className={styles.cityButton} onClick={() => handleCityChange('Casablanca')}>Casablanca</button>
                </div>
                <div className={styles.hotelsContainer}>
                    {hotelsByCity[selectedCity].map((hotel: HotelData, index: number) => (
                        <Hotel key={index} name={hotel.name} stars={hotel.stars} imageUrl={hotel.imageUrl} />
                    ))}
                </div>
                <div className={styles.space}></div>
            </div>
            <div style={{ marginBottom: '40px' }}>
                <h3>2. Location meublée: Convention de partenariat entre Cnexia et Stay here: </h3>
                <br />
                <p style={{ marginBottom: '20px' }}>
                    La convention établie entre CNEXIA et Stay here vise à offrir des réductions aux collaborateurs de CNEXIA pour la location meublée, exclusivement à usage d'habitation.
                </p>

                <h3>Avantages offerts :</h3>
                <br />
                <p style={{ marginBottom: '20px' }}>
                    Les collaborateurs de CNEXIA bénéficient d'une réduction de 20 % par rapport aux prix normaux.
                </p>

                <h3 style={{ marginBottom: '10px' }}>Tarifs :</h3>
                <p style={{ marginBottom: '10px' }}>Pour Rabat :</p>
                <ul style={{ marginBottom: '20px' }}>
                    <li>Studio 2 : 610 MAD</li>
                    <li>Appartement sans canapé-lit + Balcon : 3 699 MAD</li>
                    <li>Appartement avec canapé-lit + Balcon : 4 799 MAD</li>
                    <li>Penthouse : 4 899 MAD</li>
                    <li>Appartement 2 chambres : 6 949 MAD</li>
                    <li>Appartement 3 chambres : 7 249 MAD</li>
                </ul>
            </div>
            <h3>3. Convention de partenariat avec GAZELLES DESTINATION: </h3>
            <br />
            <img
                className={styles.headerImage}
                src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets')/Files('Gazel.png')/$value"
                alt="Gazelles Destination"
            />
            <p style={{ marginBottom: '20px' }}>
                CNEXIA et GAZELLES DESTINATION, agence de voyages affiliée à l'IATA, unissent leurs efforts pour offrir des voyages à prix réduits aux employés de CNEXIA.
            </p>

            <h3>Avantages offerts :</h3>
            <br />
            <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginBottom: '20px' }}>
                <li>-5% de remise immédiate pour tout achat d’un voyage dans un de ses points de ventes.</li>
                <li>Remise calculée sur le forfait de base du voyage, hors billets d’avions et autres éléments s’ajoutant à la réservation.</li>
                <li>Remise valable sur des voyages dit à forfait (Packages touristiques, Séjours linguistiques, Réservation d’hôtel au Maroc ou à l’international, Parcs d’attractions, Oumra, Croisières)</li>
            </ul>

            <h3>Condition :</h3>
            <br />
            <p style={{ marginBottom: '20px' }}>
                Présentation du badge professionnel
            </p>
        </div>
    );
};

export default HotelsVoyages;
