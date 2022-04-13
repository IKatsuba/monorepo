import { render } from '@testing-library/react';

import MexicoLibrary2 from './mexico-library-2';

describe('MexicoLibrary2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MexicoLibrary2 />);
    expect(baseElement).toBeTruthy();
  });
});
