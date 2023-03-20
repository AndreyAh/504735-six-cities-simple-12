import {Offers} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';
import React from 'react';

type OfferCardListProps = {
  offers: Offers;
};


function OffersCardList(props: OfferCardListProps): JSX.Element {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <React.Fragment key={offer.id}>
          <OfferCard offer={offer} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default OffersCardList;
