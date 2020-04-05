import { FONT, COLORS, BORDER } from '../../styles/variables';

const Card = (props) => {
  return (
    <article className="Card">
      <span className="Card__icon"></span>
      <style jsx>{`
        .Card {
          position: relative;
          height: 270px;
          width: 200px;
          border-radius: ${BORDER.RADIUS};
          // box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.2);
          background: red;
          // background: url('') linear-gradient(to top, ${COLORS.DARK}, rgba(0, 0, 0, 0) 30%);
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
