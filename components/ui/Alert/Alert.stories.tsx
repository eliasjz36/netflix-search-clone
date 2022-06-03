import { ComponentStory, Meta } from '@storybook/react';

import { Severity } from '@enums/alert.enum';

import Alert from './Alert';

export default {
  title: 'UI/Alert',
  component: Alert,
} as Meta;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Error = Template.bind({});

Error.args = {
  type: Severity.ERROR,
  children: ['Error message'],
};

export const Success = Template.bind({});

Success.args = {
  type: Severity.SUCCESS,
  children: ['Success message'],
};
