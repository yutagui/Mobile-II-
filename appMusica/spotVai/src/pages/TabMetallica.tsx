import React from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, 
          IonAvatar, IonItem, IonLabel, IonIcon, IonImg, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabMetallica.css';
import './../theme/variables.css';

const TabMetallica: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Artistas</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonImg  src="https://logosmarcas.net/wp-content/uploads/2020/09/Metallica-Logo-650x366.png"/>

    <IonLabel className='nomeArtista'> Metallica </IonLabel>

    <IonContent>
      <IonList>
        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab"/>
            </IonAvatar>
            <IonLabel>
                Fade to Black 
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tzrBaw6aepGIXtPuPBth5QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Sad But True
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tFsUFuj4wsC57Db1TwLmaQHaEK?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Spit out the Bone 
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.LA23YoC5jlikgcUjFZu21QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Nothing Else Matters
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

export default TabMetallica;
