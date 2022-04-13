import { render } from '@testing-library/react';

import CairoLibrary5 from './cairo-library-5';

describe('CairoLibrary5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CairoLibrary5 />);
    expect(baseElement).toBeTruthy();
  });
});
