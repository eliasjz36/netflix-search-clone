import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './Footer.stories';

const { Basic } = composeStories(stories);

describe('Footer', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<Basic />);
  });

  it('should render basic footer', () => {
    const footer = component.container.getElementsByTagName('footer');

    expect(footer).toBeTruthy();
    expect(footer).toHaveLength(1);
  });

  it('should render footer with copyright', () => {
    const copyright =
      '© 1997-2022 Netflix, Inc. 437076b3-c324-4d32-aa86-f40df9dc1d08';

    component.getByText(copyright);
  });

  it('should render footer social media links', () => {
    const socialLinks = component.container.getElementsByTagName('svg');

    expect(socialLinks[0].parentElement?.title).toBe('Facebook');
    expect(socialLinks[1].parentElement?.title).toBe('Instagram');
    expect(socialLinks[2].parentElement?.title).toBe('Twitter');
    expect(socialLinks[3].parentElement?.title).toBe('Youtube');
  });

  it('should render footer links', () => {
    const links = component.container.getElementsByTagName('li');

    expect(links.length).toBe(13);
  });
});
