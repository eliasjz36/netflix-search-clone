import { ComponentStory, Meta } from '@storybook/react';

import Navbar from './Navbar';

export default {
  title: 'COMMON/Navbar',
  component: Navbar,
} as Meta;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Basic = Template.bind({});
