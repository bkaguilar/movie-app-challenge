import { FONT, COLORS, BORDER } from '../../styles/variables';

type HeaderProps = {
  handlerInput(event: React.ChangeEvent<HTMLInputElement>): void;
};

const Header: React.FC<HeaderProps> = ({ handlerInput }) => {
  return (
    <header className="Header">
      <figure className="Header__figure"></figure>
      <input type="text" className="Header__input" onChange={handlerInput} placeholder="Search movies..." />
      <style jsx>{`
        .Header {
          height: 120px;
          padding: 10px;
        }

        .Header__input {
          width: 100%;
          padding: 12px;
          font-size: 1em;
          border-radius: ${BORDER.RADIUS};
        }

        .Header__input::placeholder {
          font-size: 1.1em;
          color: ${COLORS.SECONDARY};
          font-family: ${FONT.FAMILY};
        }
      `}</style>
    </header>
  );
};
export default Header;
