import { render } from '@testing-library/react';

import Library3Component24 from './library-3-component-24';

describe('Library3Component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component24 />);
    expect(baseElement).toBeTruthy();
  });
});
