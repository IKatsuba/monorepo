import { render } from '@testing-library/react';

import CairoLibrary4 from './cairo-library-4';

describe('CairoLibrary4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CairoLibrary4 />);
    expect(baseElement).toBeTruthy();
  });
});
