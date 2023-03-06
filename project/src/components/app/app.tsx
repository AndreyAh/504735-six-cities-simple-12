import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  NumberOfOffers: number;
}

function App({NumberOfOffers}: AppScreenProps): JSX.Element {
  return (
    <MainPage NumberOfOffers={NumberOfOffers} />
  );
}

export default App;
