import { ComponentStory, Meta } from '@storybook/react';

import TitleCard from './TitleCard';

export default {
  title: 'TITLE/TitleCard',
  component: TitleCard,
} as Meta;

const Template: ComponentStory<typeof TitleCard> = (args) => (
  <TitleCard {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  title: {
    id: 'tt3166734',
    resultType: 'Title',
    image:
      'https://imdb-api.com/images/original/MV5BM2NkNmRkOTAtNGFmMC00MWRjLWFkNGMtNmEzZjQyNGU4ZDI1L2ltYWdlXkEyXkFqcGdeQXVyMjA2ODE2ODE@._V1_Ratio0.7273_AL_.jpg',
    title: 'Basic Title Card',
    description: 'Basic title card description',
  },
};
