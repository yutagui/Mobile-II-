import React from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, 
          IonAvatar, IonItem, IonLabel, IonIcon, IonImg, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle className='ion-padding' size='large'>Bem Vindo, Guilherme</IonTitle>
        <IonContent className='ion-padding'>O que deseja ouvir hoje?</IonContent>

        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}

      </IonContent>
      <IonList>
        <IonItem>
          <IonAvatar slot = 'start'>
            <IonImg src="https://logosmarcas.net/wp-content/uploads/2020/09/Metallica-Logo-650x366.png"/>
          </IonAvatar>
          <IonLabel>
            Metallica
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot = 'start'>
            <IonImg src="https://www.kindpng.com/picc/m/487-4871235_nirvana-band-logo-png-transparent-png.png"/>
          </IonAvatar>
          <IonLabel>
            Nirvana
          </IonLabel>
        </IonItem>
      

      <IonItem>
          <IonAvatar slot = 'start'>
            <IonImg src="https://th.bing.com/th/id/R.0a64ebd88b57e068b763be2365dc04bd?rik=teSC5MnINXyWvA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fslipknot-s-logo.jpg&ehk=6nCyqDTPKtqkZY1ul3YyuzqoHsEdxmG%2b6Qe30SqfYjo%3d&risl=&pid=ImgRaw&r=0"/>
          </IonAvatar>
          <IonLabel>
            Slipknot
          </IonLabel>
      </IonItem>

      <IonItem>
          <IonAvatar slot = 'start'>
            <IonImg src="https://th.bing.com/th/id/R.d00e049de62f9b076eef746f607ebf1a?rik=iqBY1LKDaWd1Yw&pid=ImgRaw&r=0"/>
          </IonAvatar>
          <IonLabel>
            The Beatles
          </IonLabel>
      </IonItem>
      
      <IonItem>
          <IonAvatar slot = 'start'>
            <IonImg src="https://th.bing.com/th/id/R.31a5f8e659d99d5ace2f50675f7bfa41?rik=FqR%2f82jUZceUQg&pid=ImgRaw&r=0"/>
          </IonAvatar>
          <IonLabel>
            Iron Maiden
          </IonLabel>
      </IonItem>

      <IonItem>
          <IonAvatar slot = 'start'>
            <IonImg src="https://th.bing.com/th/id/OIP.SGbHqKbi1sLy57hymItnqQHaHa?rs=1&pid=ImgDetMain"/>
          </IonAvatar>
          <IonLabel>
            Tribo da Periferia
          </IonLabel>
      </IonItem>
    </IonList>
      <IonButton routerLink='/tab5' color='danger'>
        Logout
      </IonButton>
    </IonPage>
  );
};

export default Tab1;
