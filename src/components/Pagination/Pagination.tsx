import Arrow from '../../assets/icons/arrow.svg';
import { COLORS, BORDER, TRANSITION, PADDING } from '../../styles/variables';

type PaginationProps = {
  showPrevLink: boolean;
  showNextLink: boolean;
  handlerPage(num: number): void;
};

const Pagination: React.FC<PaginationProps> = ({ showPrevLink, showNextLink, handlerPage }) => {
  return (
    <div className="Pagination">
      {showPrevLink && (
        <span onClick={() => handlerPage(-1)} className="Pagination__link Pagination__link--prev" title="Prev Page">
          <Arrow fill={COLORS.MAIN_HIGHLIGHT} width="16px" stroke={COLORS.MAIN_HIGHLIGHT} />
          Prev
        </span>
      )}

      {showNextLink && (
        <span onClick={() => handlerPage(+1)} className="Pagination__link Pagination__link--next" title="Next Page">
          Next
          <Arrow
            fill={COLORS.MAIN_HIGHLIGHT}
            width="16px"
            stroke={COLORS.MAIN_HIGHLIGHT}
            style={{ transform: 'rotate(180deg)' }}
          />
        </span>
      )}
      <style jsx>{`
        .Pagination {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 ${PADDING.LAYOUT};
        }

        .Pagination__link {
          cursor: pointer;
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

        .Pagination__link:hover {
          background: ${COLORS.MAIN_HIGHLIGHT_ALPHA};
        }
      `}</style>
    </div>
  );
};

export default Pagination;
