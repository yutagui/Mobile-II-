import React from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, 
          IonAvatar, IonItem, IonLabel, IonIcon, IonImg, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab8: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Buscas Recentes</IonTitle>
        </IonToolbar>
      </IonHeader>
    
    <IonContent color="dark">
      <IonList>
      <IonItem color="medium">
        <IonAvatar slot="start">
          <IonImg src="https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab"/>
        </IonAvatar>
        <IonLabel>
          Derek - TRAP THE FATO
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src="https://th.bing.com/th/id/OIP.tzrBaw6aepGIXtPuPBth5QHaHa?rs=1&pid=ImgDetMain"/>
        </IonAvatar>
        <IonLabel>
          Grupo Revelação - Coração Radiante
        </IonLabel>
      </IonItem>

      <IonItem color="medium">
        <IonAvatar slot="start">
          <IonImg src="https://th.bing.com/th/id/OIP.tFsUFuj4wsC57Db1TwLmaQHaEK?rs=1&pid=ImgDetMain"/>
        </IonAvatar>
        <IonLabel>
          Simone Mendes - Pior Parte 
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src="https://th.bing.com/th/id/OIP.LA23YoC5jlikgcUjFZu21QHaHa?rs=1&pid=ImgDetMain"/>
        </IonAvatar>
        <IonLabel>
          Mc Th da Serra - Não vou namorar
        </IonLabel>
      </IonItem>

      <IonItem color="medium">
        <IonAvatar slot="start">
          <IonImg src="https://th.bing.com/th/id/OIP.4UG9MOpChNTRM1rJHB80IQHaEK?rs=1&pid=ImgDetMain"/>
        </IonAvatar>
        <IonLabel>
          AC DC - Back in Black
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src="https://th.bing.com/th/id/OIF.TiR3zun5O4eOJzLYJ4RjmQ?rs=1&pid=ImgDetMain"/>
        </IonAvatar>
        <IonLabel>
          Padre Fabio de Melo - Nasceu Jesus
        </IonLabel>
      </IonItem>

      <IonItem color="medium">
        <IonAvatar slot="start">
          <IonImg src="https://th.bing.com/th/id/R.c752e985d8d4357d09a0178ed21af8b6?rik=XSuyDH8wXGjtwA&pid=ImgRaw&r=0"/>
        </IonAvatar>
        <IonLabel>
          Racionais MCs - Da ponte pra ca 
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src="https://th.bing.com/th/id/OIP.QKzvv1ovYTwRXvWq9_LSRAHaF7?rs=1&pid=ImgDetMain"/>
        </IonAvatar>
        <IonLabel>
          Blacked Eyed Peas - Where is the love? 
        </IonLabel>
      </IonItem>

      <IonItem color="medium">
        <IonAvatar slot="start">
          <IonImg src="https://i.ytimg.com/vi/vTmXcE8ALwY/maxresdefault.jpg"/>
        </IonAvatar>
        <IonLabel>
          Cleiton Rasta - Cabeça de gelo
        </IonLabel>
      </IonItem>

    </IonList>

    </IonContent>

      <IonButton routerLink='/tab2' color='tertiary'>
        Voltar
    </IonButton>

    </IonPage>
  );
};

export default Tab8;
