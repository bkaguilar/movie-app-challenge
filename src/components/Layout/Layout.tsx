import { FONT, COLORS, LAYOUT } from '../../styles/variables';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@700&family=Roboto:wght@100;400;700&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: ${FONT.ROBOTO};
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

        ::-webkit-scrollbar {
          width: 5px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: ${COLORS.MAIN_HIGHLIGHT};
          border-radius: 10px;
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

        @keyframes show {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
