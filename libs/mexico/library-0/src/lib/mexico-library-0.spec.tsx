import { render } from '@testing-library/react';

import MexicoLibrary0 from './mexico-library-0';

describe('MexicoLibrary0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MexicoLibrary0 />);
    expect(baseElement).toBeTruthy();
  });
});
