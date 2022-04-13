import { render } from '@testing-library/react';

import Library1Component1 from './library-1-component-1';

describe('Library1Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
