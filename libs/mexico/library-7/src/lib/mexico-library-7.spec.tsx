import { render } from '@testing-library/react';

import MexicoLibrary7 from './mexico-library-7';

describe('MexicoLibrary7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MexicoLibrary7 />);
    expect(baseElement).toBeTruthy();
  });
});
