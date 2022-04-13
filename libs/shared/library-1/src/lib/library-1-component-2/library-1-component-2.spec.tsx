import { render } from '@testing-library/react';

import Library1Component2 from './library-1-component-2';

describe('Library1Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
