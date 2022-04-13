import { render } from '@testing-library/react';

import CairoLibrary0 from './cairo-library-0';

describe('CairoLibrary0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CairoLibrary0 />);
    expect(baseElement).toBeTruthy();
  });
});
