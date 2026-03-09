import { Button, Group, Paper, Stack, Title, Text, Divider, List, Highlight } from "@mantine/core";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { testSlice } from "./testSlice";

export function ReduxComponent() {
  return <Paper shadow='lg' withBorder>
    <Stack gap='md' p='md'>
      <Title order={2}>Redux Component</Title>
      <Text>Redux will only render the child that listen to that specific selector when it's updated</Text>
      <Text>Under here, there are 2 separate component that uses different value from same redux slice, but updating the state of one of them will only the listener to the selector</Text>
      <Text>You can try by clicking the button below and look at how the react scan detect the re-rendering</Text>
      <InternalComponent1 />
      <InternalComponent2 />
      <SumOf1And2 />
      <Divider />
      <Title order={4}>When to use Redux</Title>
      <List>
        <List.Item>You want to optimize the globally shared values, that context will likely to cause too much re-render</List.Item>
        <List.Item>You want to have a value that get updated often and not efficient for context to handle it</List.Item>
        <List.Item><Highlight highlight={'Props Drilling'}>You want to prevent Props Drilling that is considered globally shared value</Highlight></List.Item>
      </List>
    </Stack>
  </Paper>
}

function InternalComponent1() {
  const counter1 = useAppSelector(state => state.test.counter1)
  const dispatch = useAppDispatch()
  return <Group>
    <Group>Counter 1: {counter1}</Group>
    <Button onClick={() => dispatch(testSlice.actions.upcount1())}>Add</Button>
  </Group>
}

function InternalComponent2() {
  const counter2 = useAppSelector(state => state.test.counter2)
  const dispatch = useAppDispatch()
  return <Group>
    <Group>Counter 2: {counter2}</Group>
    <Button onClick={() => dispatch(testSlice.actions.upcount2())}>Add</Button>
  </Group>
}

function SumOf1And2() {
  const counter1 = useAppSelector(state => state.test.counter1)
  const counter2 = useAppSelector(state => state.test.counter2)
  return <Group>
    <Group>Sum: {counter1 + counter2}</Group>
  </Group>
}