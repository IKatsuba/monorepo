import { render } from '@testing-library/react';

import Library1Component4 from './library-1-component-4';

describe('Library1Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
