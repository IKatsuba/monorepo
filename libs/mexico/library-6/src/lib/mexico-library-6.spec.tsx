import { render } from '@testing-library/react';

import MexicoLibrary6 from './mexico-library-6';

describe('MexicoLibrary6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MexicoLibrary6 />);
    expect(baseElement).toBeTruthy();
  });
});
