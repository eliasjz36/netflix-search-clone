import { ComponentStory, Meta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
} as Meta;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  header: 'Dropdown',
  options: [
    { name: 'Option 1', href: '#' },
    { name: 'Option 2', href: '#' },
    { name: 'Option 3', href: '#' },
  ],
};
