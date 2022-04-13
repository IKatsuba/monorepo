import { render } from '@testing-library/react';

import Library1Component21 from './library-1-component-21';

describe('Library1Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
