import { render } from '@testing-library/react';

import Library6Component13 from './library-6-component-13';

describe('Library6Component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component13 />);
    expect(baseElement).toBeTruthy();
  });
});
