import SearchIcon from '../../assets/icons/search.svg';
import { FONT, COLORS, BORDER, TRANSITION } from '../../styles/variables';

type HeaderProps = {
  handlerInput(event: React.ChangeEvent<HTMLInputElement>): void;
};

const Header: React.FC<HeaderProps> = ({ handlerInput }) => {
  return (
    <header className="Header">
      <figure className="Header__figure"></figure>
      <div className="Header__search">
        <span className="Header__search__icon">
          <SearchIcon fill={COLORS.SECONDARY} width="24px" height="100%" />
        </span>
        <input
          type="text"
          className="Header__search__input"
          onChange={handlerInput}
          placeholder="Search movies..."
          autoFocus
        />
      </div>
      <style jsx>{`
        .Header {
          height: 120px;
          padding: 10px;
        }

        .Header__search {
          position: relative;
        }

        .Header__search__icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 24px;
          margin: 0 7px;
          padding-right: 2px;
          border-right: 1px solid ${COLORS.SECONDARY};
          display: inline-block;
          pointer-events: none;
        }

        .Header__search__input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          font-size: 1em;
          border: 1px solid ${COLORS.SECONDARY};
          border-radius: ${BORDER.RADIUS};
          transition: ${TRANSITION.LINEAR};
        }

        .Header__search__input:focus {
          border-color: ${COLORS.MAIN_HIGHLIGHT};
          box-shadow: 0 0 2px 8px ${COLORS.MAIN_HIGHLIGHT_ALPHA};
        }

        .Header__search__input::placeholder {
          font-size: 1.2em;
          color: ${COLORS.SECONDARY};
          font-family: ${FONT.FAMILY};
        }
      `}</style>
    </header>
  );
};
export default Header;
