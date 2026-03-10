
import { Provider } from 'react-redux'
import { store } from './store'
import { ReduxComponent } from './ReduxComponent'
import { TestProvider } from './TestProvider'
import { ContextComponent } from './ContextComponent'
import { Container, Text, Stack, Title, Anchor } from '@mantine/core'


export function ReactVsReduxPage() {
  return <Container py='md'>
    <Stack gap='xl'>
      <Title>Context vs Redux</Title>
      <Text>This demo has to be injected injected with <Anchor href='https://react-scan.com/' target="_blank">React-Scan</Anchor> so we can tell which component get re-rendered</Text>
      <TestProvider>
        <ContextComponent />
      </TestProvider>
      <Provider store={store}>
        <ReduxComponent />
      </Provider>
    </Stack>
  </Container>
}