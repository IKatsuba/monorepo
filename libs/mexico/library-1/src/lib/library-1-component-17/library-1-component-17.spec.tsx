import { render } from '@testing-library/react';

import Library1Component17 from './library-1-component-17';

describe('Library1Component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component17 />);
    expect(baseElement).toBeTruthy();
  });
});
