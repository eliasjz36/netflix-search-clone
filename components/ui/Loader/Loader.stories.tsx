import { ComponentStory, Meta } from '@storybook/react';

import Loader from './Loader';

export default {
  title: 'UI/Loader',
  component: Loader,
} as Meta;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Red = Template.bind({});

Red.args = {
  color: 'red',
};

export const Green = Template.bind({});

Green.args = {
  color: 'green',
};

export const Purple = Template.bind({});

Purple.args = {
  color: 'purple',
};
