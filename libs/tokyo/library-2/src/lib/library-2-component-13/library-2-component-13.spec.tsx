import { render } from '@testing-library/react';

import Library2Component13 from './library-2-component-13';

describe('Library2Component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component13 />);
    expect(baseElement).toBeTruthy();
  });
});
