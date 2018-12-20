import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <GlobalStyle />
        {children}
      </section>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
html , body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	font-family: Arial,Helvetica Neue,Helvetica,sans-serif ;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
} 
   body{ 
    a:hover, button:hover{
      cursor: pointer;
        }
    }
`;

const theme = {
  colors: {
    background: '#fafafa',
    backgroundTwo: '#fff',
    accent: '#FFCE70',
    primary: '#000',
    palePurple: '#ba7fd8',
    pinkPurple: '#c545df',
    sandy: '#f4db6f',
    sandyTwo: '#f3d36f',
    greenishTeal: '#2ecc71',
    peachyPink: '#ff8e8e',
    text: {
      light: '#c6c6c6',
      pinkishGrey: '#c8c8c8',
      regular: '#b8b8b8',
      warmGrey: '#939393',
      warmGreyTwo: '#9a9a9a',
      bold: '#a7a7a7',
      brownishGrey: '#606060',
      brownishGreyTwo: '#6d6d6d',
      greyishTwo: '#a9a9a9'
    }
  }
};

export default Theme;
