import { render } from '@testing-library/react';

import CairoLibrary3 from './cairo-library-3';

describe('CairoLibrary3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CairoLibrary3 />);
    expect(baseElement).toBeTruthy();
  });
});
