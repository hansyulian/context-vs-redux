
import { createTheme, MantineProvider, Paper } from '@mantine/core'
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ReactVsReduxPage } from './pages/ReactVsReduxPage/ReactVsReduxPage';
import { PropsDrillingPage } from './pages/PropsDrillingPage/PropsDrillingPage';

const theme = createTheme({
  /** Put your mantine theme override here */
  components: {
    Paper: Paper.extend({
      defaultProps: {
        withBorder: true,
        shadow: 'md',
      }
    })
  }
});

function App() {

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ReactVsReduxPage />}></Route>
          <Route path='/props-drilling' element={<PropsDrillingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
