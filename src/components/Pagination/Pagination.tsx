import Arrow from '../../assets/icons/arrow.svg';
import { COLORS, BORDER, TRANSITION, ANIMATION, PADDING } from '../../styles/variables';

type PaginationProps = {};

const Pagination = () => {
  return (
    <div className="Pagination">
      <a href="" className="Pagination__anchor Pagination__anchor--prev" title="Prev Page">
        <Arrow className="ArrowIcon" fill={COLORS.MAIN_HIGHLIGHT} width="16px" stroke={COLORS.MAIN_HIGHLIGHT} />
        Prev
      </a>
      <a href="" className="Pagination__anchor Pagination__anchor--next" title="Next Page">
        Next
        <Arrow
          className="ArrowIcon"
          fill={COLORS.MAIN_HIGHLIGHT}
          width="16px"
          stroke={COLORS.MAIN_HIGHLIGHT}
          style={{ transform: 'rotate(180deg)' }}
        />
      </a>

      <style jsx>{`
        .Pagination {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 ${PADDING.LAYOUT};
        }

        .Pagination__anchor {
          width: 80px;
          padding: 5px 7px;
          margin: 0 5px;
          border-radius: ${BORDER.RADIUS};
          border: 1px solid ${COLORS.MAIN_HIGHLIGHT};
          font-weight: bold;
          font-size: 0.8em;
          text-transform: uppercase;
          color: ${COLORS.MAIN_HIGHLIGHT};
          transition: ${TRANSITION.LINEAR};
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .Pagination__anchor:hover {
          background: ${COLORS.MAIN_HIGHLIGHT_ALPHA};
        }
      `}</style>
    </div>
  );
};

export default Pagination;
