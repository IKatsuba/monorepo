import { render } from '@testing-library/react';

import CairoLibrary7 from './cairo-library-7';

describe('CairoLibrary7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CairoLibrary7 />);
    expect(baseElement).toBeTruthy();
  });
});
