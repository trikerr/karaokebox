import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, useIonToast} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './UserTab.css';

const UserTab: React.FC = () => {
    const clicked = (text: string) => {
        console.log(`Clicked ${text}`);
    }

    const [present] = useIonToast();

    const presentToast = (text: string) => {
        present({
            message: text,
            duration: 1500,
            position: 'top',
            color: "warning"
        });
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hola Sergio!</IonTitle>
          </IonToolbar>
        </IonHeader>
          <div className="ion-padding-top ion-text-center">
              <img className="avatar" src="/assets/images/avatar.jpg" alt="avatar" />
              <h2>Sergio Fernández</h2>
              <IonList inset className="ion-margin-top">
                  <IonItem onClick={() => presentToast('Update Picture')}>Update Picture</IonItem>
                  <IonItem onClick={() => presentToast('Update Username')}>Change Username</IonItem>
                  <IonItem onClick={() => presentToast('Change Password')}>Change Password</IonItem>
                  <IonItem onClick={() => presentToast('Tus favoritos')}>Tus favoritos</IonItem>
                  <IonItem onClick={() => presentToast('Support')}>Support</IonItem>
                  <IonItem onClick={() => presentToast('Logout')}>Logout</IonItem>
              </IonList>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default UserTab;
