import { render } from '@testing-library/react';

import MexicoLibrary1 from './mexico-library-1';

describe('MexicoLibrary1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MexicoLibrary1 />);
    expect(baseElement).toBeTruthy();
  });
});
