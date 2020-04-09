import { COLORS, TRANSITION } from '../../styles/variables';

const Spinner = () => {
  return (
    <div className="Spinner">
      <svg viewBox="0 0 100 100" className="Spinner__circle">
        <path d="M95,50 A45,45 0 0,1 5,50 A45,45 0 0,1 50,5" />
      </svg>
      <style>
        {`
    .Spinner {
      height: 100%;
      width: 100%;
      grid-column: 1 / lastline;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .Spinner__circle {
      height: 100px;
      width: 100px;
      fill: none;
      stroke: ${COLORS.MAIN_HIGHLIGHT};
      stroke-width: 8;
      stroke-linecap: round;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
    `}
      </style>
    </div>
  );
};

export default Spinner;
