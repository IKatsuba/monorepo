import { render } from '@testing-library/react';

import Library1Component8 from './library-1-component-8';

describe('Library1Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component8 />);
    expect(baseElement).toBeTruthy();
  });
});
