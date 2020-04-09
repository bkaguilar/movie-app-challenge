import SearchIcon from '../../assets/icons/search.svg';
import { FONT, COLORS, BORDER, TRANSITION, PADDING } from '../../styles/variables';

type HeaderProps = {
  handlerInput(event: React.ChangeEvent<HTMLInputElement>): void;
};

const Header: React.FC<HeaderProps> = ({ handlerInput }) => {
  return (
    <header className="Header">
      <h1 className="Header__title">Find and discover movies</h1>
      <p className="Header__subtitle">In this aplication you can search a movie and add it to favourites one.</p>
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
          min-height: 120px;
          padding: ${PADDING.LAYOUT};
          margin-bottom: 100px;
          text-align: center;
        }

        .Header__title {
          font-family: 'Bitter', serif;
          font-size: 4vmax;
          line-height: 1;
          width: 60%;
          margin: 50px auto 20px auto;
          padding: 20px;
        }

        .Header__subtitle {
          color: ${COLORS.DARK_ALPHA};
          margin-bottom: 50px;
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
          border-right: 1px solid ${COLORS.DARK_ALPHA};
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
