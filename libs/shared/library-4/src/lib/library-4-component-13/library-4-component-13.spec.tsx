import { render } from '@testing-library/react';

import Library4Component13 from './library-4-component-13';

describe('Library4Component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component13 />);
    expect(baseElement).toBeTruthy();
  });
});
