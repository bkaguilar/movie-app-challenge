import { COLORS, TRANSITION, BORDER } from '../../styles/variables';

type ButtonProps = {
  className: string;
  value: string;
  icon: string;
};

const Button: React.FC<ButtonProps> = ({ className, value, icon }) => {
  return (
    <button className={`Button ${className}`}>
      <span className="Button__icon">{icon}</span>
      {value}
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
