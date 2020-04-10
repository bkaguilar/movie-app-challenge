import { COLORS, TRANSITION, BORDER } from '../../styles/variables';
import React, { useState } from 'react';

type ButtonProps = {
  className: string;
  value: string;
  activeValue: string;
  icon: React.ReactNode;
  title: string;
  handlerHove?: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, value, activeValue, icon, title }) => {
  const [active, setActive] = useState(false);

  const handlerClick = () => {
    setActive(!active);
  };

  return (
    <button className={`Button ${className}`} onClick={handlerClick} title={title}>
      <span className="Button__icon">{icon}</span>
      {active ? activeValue : value}
      <style jsx>
        {`
          .Button {
            padding: 12px;
            border-radius: ${BORDER.RADIUS};
            border: 1px solid ${active ? 'transparent' : COLORS.SECONDARY};
            color: ${active ? COLORS.WHITE : COLORS.SECONDARY};
            font-weight: 700;
            transition: ${TRANSITION.LINEAR};
            background: ${active ? COLORS.MAIN_NEGATIVE : 'none'};
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .Button:hover {
            border: 1px solid ${COLORS.MAIN_NEGATIVE};
            color: ${COLORS.WHITE};
            background: ${COLORS.MAIN_NEGATIVE};
          }

          .Button:hover > .Button__icon {
            fill: ${COLORS.WHITE};
            stroke: none;
          }

          .Button__icon {
            fill: ${active ? COLORS.WHITE : 'none'};
            stroke: ${active ? 'none' : COLORS.SECONDARY};
            stroke-width: 2px;
            height: 16px;
            width: 16px;
            margin-right: 6px;
          }

          .Button--movie {
            margin: 20px 0;
            width: 40%;
          }

          @media only screen and (max-width: 768px) {
            .Button--movie {
              margin: 20px 0;
              width: 100%;
            }
          }
        `}
      </style>
    </button>
  );
};

export default Button;
