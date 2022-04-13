import { render } from '@testing-library/react';

import Library1Component7 from './library-1-component-7';

describe('Library1Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
