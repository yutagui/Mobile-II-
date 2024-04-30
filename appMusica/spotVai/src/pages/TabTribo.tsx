import React from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, 
          IonAvatar, IonItem, IonLabel, IonIcon, IonImg, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabMetallica.css';

const TabTribo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Artistas</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonImg  src="https://th.bing.com/th/id/OIP.SGbHqKbi1sLy57hymItnqQHaHa?rs=1&pid=ImgDetMain"/>

    <IonLabel className='nomeArtista'> Tribo da Periferia </IonLabel>

    <IonContent color="medium">
      <IonList>
        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab"/>
            </IonAvatar>
            <IonLabel>
                Nosso Plano 
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tzrBaw6aepGIXtPuPBth5QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Imprevísivel 
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.tFsUFuj4wsC57Db1TwLmaQHaEK?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Resiliência
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.LA23YoC5jlikgcUjFZu21QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
                Alma de Pipa
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

export default TabTribo;
