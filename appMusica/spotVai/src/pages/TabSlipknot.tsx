import React from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, 
          IonAvatar, IonItem, IonLabel, IonIcon, IonImg, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabMetallica.css';

const TabSlipknot: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Artistas</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonImg  src="https://th.bing.com/th/id/R.0a64ebd88b57e068b763be2365dc04bd?rik=teSC5MnINXyWvA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fslipknot-s-logo.jpg&ehk=6nCyqDTPKtqkZY1ul3YyuzqoHsEdxmG%2b6Qe30SqfYjo%3d&risl=&pid=ImgRaw&r=0"/>

    <IonLabel className='nomeArtista'> Slipknot </IonLabel>

    <IonContent>
      <IonList>
        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab"/>
            </IonAvatar>
            <IonLabel>
                Snuff
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tzrBaw6aepGIXtPuPBth5QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Duality
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tFsUFuj4wsC57Db1TwLmaQHaEK?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                vermillion
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.LA23YoC5jlikgcUjFZu21QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Custer
            </IonLabel>
        </IonItem>

    </IonList>

    </IonContent>

      <IonButton routerLink='/tab1' color='tertiary'>
        Voltar
    </IonButton>

    </IonPage>
  );
};

export default TabSlipknot;
