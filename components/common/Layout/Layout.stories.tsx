import { ComponentStory, Meta } from '@storybook/react';

import Layout from './Layout';

export default {
  title: 'COMMON/Layout',
  component: Layout,
} as Meta;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: [<div key="1">First child</div>],
};
