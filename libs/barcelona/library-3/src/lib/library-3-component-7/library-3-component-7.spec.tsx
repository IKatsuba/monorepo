import { render } from '@testing-library/react';

import Library3Component7 from './library-3-component-7';

describe('Library3Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
