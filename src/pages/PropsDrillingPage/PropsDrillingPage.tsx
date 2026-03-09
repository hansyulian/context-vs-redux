import { Container, Stack, Title, Text, Paper, Typography, Highlight, List } from "@mantine/core";
import { PreventingMultiPropsDrilling } from "./PreventingMultiPropsDrilling";

export function PropsDrillingPage() {
  return <Container py='md'>
    <Stack gap='xl'>
      <Paper>
        <Stack p='md'>
          <Title>Props Drilling</Title>
          <Highlight highlight='Props Drilling'>Props Drilling is a term to describe the condition where you have a component that create a prop that is not used by the component itself but only getting passed to the child component. While the prop drilling itself doesn't harm the code execution directly, it causes a terrible code maintenance as the code become messy</Highlight>
          <Text>
            This is the example of props drilling (read the code):
          </Text>
          <ParentComponent valueForDrilling={2} />
          <Highlight highlight={['Context', 'Redux']}>Context and Redux can be used to prevent the props drilling. Whether to use it depends on the condition:</Highlight>
          <List>
            <List.Item><Highlight highlight={['Context', 'Redux', 'Locally', 'Globally']}>When the props drilling is single value and globally shared value, then better to use Redux</Highlight></List.Item>
            <List.Item><Highlight highlight={['Context', 'Redux', 'Locally', 'Globally']}>When the props drilling is single value and only locally shared and changing value, then better to use Redux as well if possible, but if for some reason, it's not, then just use Context</Highlight></List.Item>
            <List.Item><Highlight highlight={['Context', 'Redux', 'Locally', 'Globally']}>When the props drilling is for looped value, then just use Context as Redux can't handle that without another props drilling</Highlight></List.Item>
          </List>
          <Highlight highlight={['Props Drilling', 'Context']}>Below here are the example of handling props drilling using Context, I assume you already have the knowledge of handling the 1st and 2nd case above, so here I create the example for the 3rd case. Please read the source code</Highlight>
        </Stack>
      </Paper>
      <PreventingMultiPropsDrilling />
    </Stack>
  </Container>
}

type DrillingProps = {
  valueForDrilling: number;
}

function ParentComponent({ valueForDrilling }: DrillingProps) {
  return <Paper p='md'>
    <Title order={4}>Parent</Title>
    <ChildComponent valueForDrilling={valueForDrilling} />
  </Paper>
}

function ChildComponent({ valueForDrilling }: DrillingProps) {
  return <Paper p='md'>
    <Title order={4}>Child</Title>
    <GrandChildComponent valueForDrilling={valueForDrilling} />
  </Paper>
}

function GrandChildComponent({ valueForDrilling }: DrillingProps) {
  return <Paper p='md'>
    <Title order={4}>Grand Child</Title>
    <Typography>{valueForDrilling}</Typography>
  </Paper>
}