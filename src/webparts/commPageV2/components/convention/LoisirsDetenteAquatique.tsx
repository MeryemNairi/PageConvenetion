import * as React from 'react';

export default function LoisirsDetenteAquatique() {
  return (
    <div style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
      <div>
        <h2  style={{ marginBottom: '40px' }}>Convention de Partenariat avec Les 3 Sources Belair</h2>
        <img
          src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets/Carrousel')/Files('les3sources.png')/$value" alt="Convention Image"
          width="350"
          height="200"
          style={{ display: 'block', margin: '0 auto' ,marginBottom: '40px'}}
       
        />

        <h3>Définition de la Convention :</h3><br />
        <p style={{ marginBottom: '20px' }}>Cette convention établit un partenariat entre CNEXIA et Les 3 Sources Belair dans le but d'offrir des avantages aux collaborateurs de CNEXIA lors de leur visite aux parcs aquatiques.
        </p>


        <h3>Avantages offerts :</h3><br />
        <p style={{ marginBottom: '20px' }}>Les collaborateurs de CNEXIA bénéficient d'une réduction de 20% pour l'accès à la piscine et de 10% sur l'achat de nourriture dans les parcs aquatiques Les 3 Sources Belair.</p>



        <h3>Éligibilité :</h3><br />
        <p style={{ marginBottom: '20px' }}>Tous les employés de CNEXIA, ainsi que leurs membres de famille portant le même nom, peuvent bénéficier des réductions en présentant leur carte de travail et un document attestant le lien familial.</p>


      </div>
      <div style={{  padding: '10px'}}>
      </div>
      <div>
        <h2>Convention de Partenariat avec les Parcs Aquatiques</h2>
        <img
          src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets/Carrousel')/Files('aquatique.png')/$value"
          alt="Convention Image"
          width="450"
          height="260"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <h3>Définition de la Convention :</h3><br />
        <p style={{ marginBottom: '20px' }}>Cette convention établit un partenariat entre CNEXIA et Rim Aquatique dans le but d'offrir des avantages aux collaborateurs de CNEXIA lors de leur visite.</p>

        <h3>Avantages offerts :</h3><br />
        <p style={{ marginBottom: '20px' }}>Les collaborateurs de CNEXIA bénéficient d'une réduction de 15% pour accès à la piscine</p>


        <h3>Éligibilité :</h3><br />
        <p style={{ marginBottom: '20px' }}>Présentation du badge professionnel</p>

      </div>
    </div>
  );

}
