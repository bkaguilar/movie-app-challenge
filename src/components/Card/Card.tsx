import { SHADOW, COLORS, BORDER, TRANSITION, ANIMATION } from '../../styles/variables';
import { DEFAULT_POSTER_PLACEHOLDER } from '../../constants';

type CardProps = {
  card: {
    Poster: string;
    Title: string;
    Year: string;
  };
};

const Card: React.FC<CardProps> = ({ card }) => {
  const posterPlaceholder = card.Poster === 'N/A' ? DEFAULT_POSTER_PLACEHOLDER : card.Poster;
  return (
    <article className="Card">
      <figure className="Card__cover">
        <img src={posterPlaceholder} alt="" />
      </figure>
      <span className="Card__icon"></span>
      <div className="Card__info">
        <span className="Card__info__title">{card.Title}</span>
        <span className="Card__info__year">{card.Year}</span>
      </div>
      <style jsx>{`
        .Card {
          cursor: pointer;
          width: 200px;
          animation: ${ANIMATION.RULE};
        }

        .Card__cover {
          position: relative;
          height: 270px;
          width: 100%;
          margin: 0 auto;
          border-radius: ${BORDER.RADIUS};
          overflow: hidden;
          box-shadow: ${SHADOW.BLACK};
          transition: ${TRANSITION.SMOOTH};
        }

        .Card__cover img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .Card:hover > .Card__cover {
          transform: scale(1.04);
        }

        .Card__info {
          padding: 12px 0;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          transform-origin: 0 bottom;
          transition: ${TRANSITION.LINEAR};
        }

        .Card__info__title {
          font-size: 1em;
          color: ${COLORS.DARK};
          height: 40px;
          overflow: hidden;
          line-height: 1.3;
        }

        .Card__info__year {
          font-size: 0.9em;
          color: ${COLORS.DARK_ALPHA};
        }
      `}</style>
    </article>
  );
};

export default Card;
