import { render } from '@testing-library/react';

import MexicoLibrary5 from './mexico-library-5';

describe('MexicoLibrary5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MexicoLibrary5 />);
    expect(baseElement).toBeTruthy();
  });
});
