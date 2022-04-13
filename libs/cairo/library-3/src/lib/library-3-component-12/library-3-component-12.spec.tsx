import { render } from '@testing-library/react';

import Library3Component12 from './library-3-component-12';

describe('Library3Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
