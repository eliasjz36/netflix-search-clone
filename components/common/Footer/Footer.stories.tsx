import { ComponentStory, Meta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'COMMON/Footer',
  component: Footer,
} as Meta;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Basic = Template.bind({});
