import { COLORS, TRANSITION, BORDER } from '../../styles/variables';

const Button = (props) => {
  return (
    <button className={`Button ${props.className}`}>
      <span className="Button__icon">{props.icon}</span>
      {props.value}
      <style jsx>
        {`
          .Button {
            padding: 12px;
            border-radius: ${BORDER.RADIUS};
            border: 1px solid ${COLORS.SECONDARY};
            color: ${COLORS.SECONDARY};
            font-weight: 700;
            transition: ${TRANSITION.LINEAR};
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .Button:hover,
          .Button--active {
            border: 1px solid ${COLORS.MAIN_NEGATIVE};
            color: ${COLORS.WHITE};
          }

          .Button--active {
            background: ${COLORS.MAIN_NEGATIVE};
          }

          .Button__icon {
            margin-right: 6px;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
