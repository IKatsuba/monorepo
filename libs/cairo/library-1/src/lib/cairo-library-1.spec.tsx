import { render } from '@testing-library/react';

import CairoLibrary1 from './cairo-library-1';

describe('CairoLibrary1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CairoLibrary1 />);
    expect(baseElement).toBeTruthy();
  });
});
