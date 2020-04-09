import { FONT, COLORS, BORDER, TRANSITION } from '../../styles/variables';
import { DEFAULT_POSTER_PLACEHOLDER } from 'src/constants';

type CardProps = {
  card: any;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const posterPlaceholder = card.Poster === 'N/A' ? DEFAULT_POSTER_PLACEHOLDER : card.Poster;
  return (
    <article className="Card">
      <span className="Card__icon"></span>
      <style jsx>{`
        .Card {
          cursor: pointer;
          position: relative;
          height: 270px;
          width: 200px;
          border-radius: ${BORDER.RADIUS};
          box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.4);
          background: url('${posterPlaceholder}');
          background-size: cover;
          transition: ${TRANSITION.SMOOTH};
        }

        .Card:hover {
          transform: scale(1.05);
        }

        .Card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 12px;
          background: rgba(10, 16, 20, 0.2);
          transform-origin: 0 bottom;
        }
      `}</style>
    </article>
  );
};

export default Card;
