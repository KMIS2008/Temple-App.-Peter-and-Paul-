import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'OleksiyChekalFont'; /* Замініть на назву шрифту */
    src: url('./fonts/OleksiyChekalFont.woff2') format('woff2'),
         url('./fonts/OleksiyChekalFont.woff') format('woff'),
         url('./fonts/OleksiyChekalFont.ttf') format('truetype'); /* Додайте потрібні формати */
    font-weight: normal; /* або bold */
    font-style: normal; /* або italic */
}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'OleksiyChekalFont', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  table, td {
  border: 1px solid #b5b5d6; 
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

  ul {
  list-style: circle;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  outline: none;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.no-scroll {
  overflow: hidden;
}
`
