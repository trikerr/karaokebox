import {IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, useIonToast} from '@ionic/react';
import './AboutTab.css';

const AboutTab: React.FC = () => {
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
                    <IonTitle>Sobre</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="ion-padding-top ion-text-center">
                    <img className="avatar" src="/assets/images/karaokebox/LogoKaraokeBox1024.jpg" alt="avatar" />
                    <h1>Karaoke Box</h1>
                    <h4>By Karaoke Media</h4>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Go premium!</IonCardTitle>
                            <IonCardSubtitle>Suscribte</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Desde solo 2,99/mes disfruta de las ultimas novedades antes que nadie!
                        </IonCardContent>
                    </IonCard>
                    <IonList inset>
                        <IonItem onClick={() => presentToast('Contacto')}>Contacto</IonItem>
                        <IonItem onClick={() => presentToast('Politica de privacidad')}>Politica de privacidad</IonItem>
                        <IonItem onClick={() => presentToast('Aviso legal')}>Aviso legal</IonItem>
                    </IonList>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AboutTab;
