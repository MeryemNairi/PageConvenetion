import * as React from 'react';

export default function MaisonArtCulinaire() {
  return (
    <div style={{ lineHeight: '1.6', maxWidth: '1288px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Convention de Partenariat entre CNEXIA et KITEA</h2>
      <img
        src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets/Carrousel')/Files('KITEA.png')/$value"
        style={{ display: 'block', margin: '0 auto' }}
      />

      <h3>Convention de Partenariat entre CNEXIA et KITEA :</h3><br />
      <p style={{ marginBottom: '20px' }}>La convention établie entre CNEXIA et KITEA vise à offrir des avantages aux collaborateurs de CNEXIA lors de leurs achats dans les magasins de KITEA au Maroc.
      </p>


      <h3>Avantages offerts :</h3><br />
      <p style={{ marginBottom: '20px' }}>Les collaborateurs de CNEXIA bénéficient de remises sur les produits de KITEA, y compris les meubles en kit et les accessoires de décoration.
      </p>

      <h3>Éligibilité :</h3><br />
      <p style={{ marginBottom: '20px' }}>Seuls les collaborateurs de CNEXIA munis de leur carte professionnelle et de leur pièce d'identité peuvent bénéficier des avantages de cette convention.</p>

      <h3>Remises :</h3><br />
      <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginBottom: '20px' }}>
        <li> Une remise de 10% sur les produits hors promotion, soldes, liquidation et prix expo.</li>
        <li>Une remise de 5% sur les produits en promotion.</li>
        <li>Aucune remise n'est accordée sur les produits en soldes, liquidation et prix expo.</li>
      </ul>
    </div>
  );

}
