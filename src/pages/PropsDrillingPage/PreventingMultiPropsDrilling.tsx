import { useState } from "react";
import { Paper, Stack, Title, Text, Highlight } from "@mantine/core";
import { UndrillProvider, useUndrill } from "./UndrillContext";


export function PreventingMultiPropsDrilling() {

  const [valuesForUndrill] = useState([{
    text: 'This is the first undrilled object',
    value: 123,
  }, {
    text: 'This is the second undrilled object',
    value: 456,
  }, {
    text: 'This is the third undrilled object',
    value: 789,
  }])

  return <Paper>
    <Stack p='md' gap='md'>
      <Title order={4}>Preventing Multi Props Drilling</Title>
      <Text>Please check this source code to see how the looped props undrilling works</Text>
      {
        valuesForUndrill.map((undrilledObject, index) => {
          return <UndrillProvider valueFromParent={undrilledObject} key={index}>
            <ParentComponent />
          </UndrillProvider>
        })
      }
    </Stack>
  </Paper>
}

function ParentComponent() {
  return <Paper p='md'>
    <Title order={4}>This is just the parent container</Title>
    <ChildComponent />
  </Paper>
}

function ChildComponent() {
  return <Paper p='md'>
    <Title order={4}>This is just the child container</Title>
    <GrandChildComponent />
  </Paper>
}

function GrandChildComponent() {
  const { undrilledObject } = useUndrill();

  return <Paper p='md'>
    <Highlight highlight='undrilled'>This is the real grand child component that will use the undrilled values</Highlight>
    <Title order={6}>Text: {undrilledObject.text}</Title>
    <Title order={6}>Value: {undrilledObject.value}</Title>
  </Paper>
}