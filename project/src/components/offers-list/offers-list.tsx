import {Offers} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
};


function OffersCardList(props: OfferCardListProps): JSX.Element {
  const {offers} = props;
  // const [firstOffer, secondOffer, thirdOffer, fourthOffer] = offers;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offers={offers} />
      )};
    </div>
  );
}

export default OffersCardList;
