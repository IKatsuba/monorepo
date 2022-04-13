import { render } from '@testing-library/react';

import Library3Component3 from './library-3-component-3';

describe('Library3Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component3 />);
    expect(baseElement).toBeTruthy();
  });
});
