import {Offer} from '../../types/offer';
import {useState} from 'react';
import {MouseEvent} from 'react';
// import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import {AppRoute} from '../../const';


type OfferCardProps = {
  offer: Offer;
};

function OfferCard({ offer }: OfferCardProps): JSX.Element {
  const { isPremium, price, rating, type, title, images, id } = offer;

  // type OfferCardProps = {
  //   offers: Offers;
  // };

  // function OfferCard(props: OfferCardProps): JSX.Element {
  //   const {offers} = props;
  //   const {isPremium, price, rating, type, title, images, id} = offers[0];

  const [, setActiveOffer] = useState(0);
  // eslint-disable-next-line no-console
  // console.log(activeOffer);

  const mouseOverHandler = (evt: MouseEvent<Element>) => {
    setActiveOffer(id);////!!!!!
  };

  return (
    <article className="cities__card place-card" onMouseOver={mouseOverHandler}>
      {isPremium ?
        <div className="place-card__mark">
          <span>isPremium</span>
        </div> :
        null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to='/offers/:id'>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="PlaceImage" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to='/offers/:id' >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
