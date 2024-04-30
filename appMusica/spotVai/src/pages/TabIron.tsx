import React from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, 
          IonAvatar, IonItem, IonLabel, IonIcon, IonImg, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabMetallica.css';

const TabIron: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Artistas</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonImg  src="https://th.bing.com/th/id/R.31a5f8e659d99d5ace2f50675f7bfa41?rik=FqR%2f82jUZceUQg&pid=ImgRaw&r=0"/>

    <IonLabel className='nomeArtista'> Iron Maiden </IonLabel>

    <IonContent>
      <IonList>
        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab"/>
            </IonAvatar>
            <IonLabel>
                Fear of The Dark 
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tzrBaw6aepGIXtPuPBth5QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Wasting Love
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tFsUFuj4wsC57Db1TwLmaQHaEK?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Wasted Years
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.LA23YoC5jlikgcUjFZu21QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                The Trooper
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

export default TabIron;
