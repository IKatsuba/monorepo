import { render } from '@testing-library/react';

import Library1Component25 from './library-1-component-25';

describe('Library1Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
