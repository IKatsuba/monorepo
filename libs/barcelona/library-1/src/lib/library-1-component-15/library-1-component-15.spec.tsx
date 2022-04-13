import { render } from '@testing-library/react';

import Library1Component15 from './library-1-component-15';

describe('Library1Component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component15 />);
    expect(baseElement).toBeTruthy();
  });
});
