import { render } from '@testing-library/react';

import CairoLibrary2 from './cairo-library-2';

describe('CairoLibrary2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CairoLibrary2 />);
    expect(baseElement).toBeTruthy();
  });
});
