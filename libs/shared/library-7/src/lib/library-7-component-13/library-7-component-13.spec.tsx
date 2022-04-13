import { render } from '@testing-library/react';

import Library7Component13 from './library-7-component-13';

describe('Library7Component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component13 />);
    expect(baseElement).toBeTruthy();
  });
});
