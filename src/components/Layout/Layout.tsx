import { FONT, COLORS, LAYOUT } from '../../styles/variables';
import Header from '@components/Header/Header';

type LayoutProps = {
  children: React.ReactNode;
  handlerInput(event: React.ChangeEvent<HTMLInputElement>): void;
};

const Layout: React.FC<LayoutProps> = ({ children, handlerInput }) => {
  return (
    <>
      <Header handlerInput={handlerInput} />
      {children}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@700&family=Roboto:wght@100;400;700&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: ${FONT.FAMILY};
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        *::-moz-selection {
          color: ${COLORS.WHITE};
          background: ${COLORS.MAIN_HIGHLIGHT};
        }

        *::selection {
          color: ${COLORS.WHITE};
          background: ${COLORS.MAIN_HIGHLIGHT};
        }

        body {
          max-width: ${LAYOUT.MAX_WIDTH};
          margin: 0 auto;
          line-height: 1.6;
          background: ${COLORS.WHITE};
          color: ${COLORS.DARK};
        }

        a {
          text-decoration: none;
        }

        input,
        button {
          border: none;
          outline: none;
        }

        button {
          background: transparent;
          cursor: pointer;
        }

        ul {
          list-style: none;
        }
      `}</style>
    </>
  );
};

export default Layout;
