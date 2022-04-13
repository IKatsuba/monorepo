import { render } from '@testing-library/react';

import Library3Component25 from './library-3-component-25';

describe('Library3Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
