import { SlidesDeck, TitlePage } from './components';
import { Chapter1, Chapter2 } from "./slides";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="reveal">
        <SlidesDeck>
          <TitlePage
            title="Asynchrony"
            subtitle="Between now and then"
            author="Piotr Staniów"
          />
          <Chapter1 />
          <Chapter2 />
        </SlidesDeck>
      </div>
    </ThemeProvider>
  );
};
