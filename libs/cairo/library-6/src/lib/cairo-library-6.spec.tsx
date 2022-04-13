import { render } from '@testing-library/react';

import CairoLibrary6 from './cairo-library-6';

describe('CairoLibrary6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CairoLibrary6 />);
    expect(baseElement).toBeTruthy();
  });
});
