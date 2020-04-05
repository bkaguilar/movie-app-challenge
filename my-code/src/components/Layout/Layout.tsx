import { FONT, COLORS, LAYOUT } from '../../styles/variables';
import Header from '@components/Header/Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
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
          background: ${COLORS.MAIN_ACTIVE};
        }
        *::selection {
          background: ${COLORS.MAIN_ACTIVE};
        }

        body {
          max-width: ${LAYOUT.MAX_WIDTH};
          margin: 0 auto;
          line-height: 1.6;
          background: ${COLORS.DARK};
          color: ${COLORS.WHITE};
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
