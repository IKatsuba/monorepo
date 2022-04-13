import { render } from '@testing-library/react';

import MexicoLibrary3 from './mexico-library-3';

describe('MexicoLibrary3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MexicoLibrary3 />);
    expect(baseElement).toBeTruthy();
  });
});
