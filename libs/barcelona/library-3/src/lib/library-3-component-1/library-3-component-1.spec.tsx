import { render } from '@testing-library/react';

import Library3Component1 from './library-3-component-1';

describe('Library3Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
