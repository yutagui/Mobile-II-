import React from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, 
          IonAvatar, IonItem, IonLabel, IonIcon, IonImg, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabMetallica.css';

const TabNirvana: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Artistas</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonImg  src="https://www.kindpng.com/picc/m/487-4871235_nirvana-band-logo-png-transparent-png.png"/>

    <IonLabel className='nomeArtista'> Nirvana </IonLabel>

    <IonContent>
      <IonList>
        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab"/>
            </IonAvatar>
            <IonLabel>
                Smells Like Teen Spirit
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tzrBaw6aepGIXtPuPBth5QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Come As You Are
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tFsUFuj4wsC57Db1TwLmaQHaEK?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                The Man Who Sold The World
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.LA23YoC5jlikgcUjFZu21QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Lithium
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

export default TabNirvana;
