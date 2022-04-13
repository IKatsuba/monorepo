import { render } from '@testing-library/react';

import Library3Component21 from './library-3-component-21';

describe('Library3Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
