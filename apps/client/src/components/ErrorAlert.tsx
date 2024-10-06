import { Callout, Strong } from '@radix-ui/themes';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export interface ErrorAlertProps {
  server?: boolean;
  message: string;
}

export function ErrorAlert({ server, message }: ErrorAlertProps) {
  return (
    <Callout.Root color="red" role="alert">
      <Callout.Icon>
        <ExclamationTriangleIcon />
      </Callout.Icon>
      <Callout.Text>
        {server && <Strong>{'Server error: '}</Strong>}
        {message}
      </Callout.Text>
    </Callout.Root>
  );
}
