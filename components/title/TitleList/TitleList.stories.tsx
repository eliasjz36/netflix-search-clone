import { ComponentStory, Meta } from '@storybook/react';

import TitleList from './TitleList';

export default {
  title: 'TITLE/TitleList',
  component: TitleList,
} as Meta;

const Template: ComponentStory<typeof TitleList> = () => <TitleList />;

export const Basic = Template.bind({});
