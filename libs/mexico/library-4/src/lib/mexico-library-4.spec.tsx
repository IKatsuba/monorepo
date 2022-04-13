import { render } from '@testing-library/react';

import MexicoLibrary4 from './mexico-library-4';

describe('MexicoLibrary4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MexicoLibrary4 />);
    expect(baseElement).toBeTruthy();
  });
});
