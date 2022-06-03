import { ComponentStory, Meta } from '@storybook/react';

import SearchBar from './SearchBar';

export default {
  title: 'COMMON/SearchBar',
  component: SearchBar,
} as Meta;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />;

export const Basic = Template.bind({});
