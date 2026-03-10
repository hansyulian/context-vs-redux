import {
  Button,
  Divider,
  Group,
  Highlight,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useTestContext } from "./useTestContext";
import { Link } from "react-router";

export function ContextComponent() {
  return (
    <Paper>
      <Stack gap="md" p="md">
        <Title order={2}>Context Component</Title>
        <Text>Context will render all the component that use it when it's updated</Text>
        <Text>
          Under here, there are 2 separate component that uses different value
          from same context, but one action will cause the other to re-render
          due to the nature of context
        </Text>
        <Text>
          You can try by clicking the button below and look at how the react
          scan detect the re-rendering
        </Text>
        <InternalContainer />
        <Divider />
        <Title order={4}>When To Use Context</Title>
        <List>
          <List.Item>
            When you know that the globally shared values doesn't change often
          </List.Item>
          <List.Item>
            When you know that the globally shared values will likely need to
            retrigger entire app recalculation
          </List.Item>
          <List.Item>
            <Group>
              <Highlight highlight="Props Drilling">
                When you want to prevent Props Drilling, the demo of props
                drilling
              </Highlight>
              <Link to="/props-drilling">here</Link>
            </Group>
          </List.Item>
          <List.Item>
            When you want to make a library with some configuration, you can't
            ask the user to setup redux with specific name etc just for this
          </List.Item>
        </List>
      </Stack>
    </Paper>
  );
}

function InternalContainer() {
  return (
    <Paper p="md">
      <Stack>
        <Title>
          This is just the container component for the components below
        </Title>
        <InternalComponent1 />
        <InternalComponent2 />
        <SumOf1And2 />
      </Stack>
    </Paper>
  );
}

function InternalComponent1() {
  const { counter1, upcount1 } = useTestContext();
  return (
    <Group>
      <Group>Counter 1: {counter1}</Group>
      <Button onClick={upcount1}>Add</Button>
    </Group>
  );
}

function InternalComponent2() {
  const { counter2, upcount2 } = useTestContext();

  return (
    <Group>
      <Group>Counter 2: {counter2}</Group>
      <Button onClick={upcount2}>Add</Button>
    </Group>
  );
}

function SumOf1And2() {
  const { counter1, counter2 } = useTestContext();
  return (
    <Group>
      <Group>Sum: {counter1 + counter2}</Group>
    </Group>
  );
}
