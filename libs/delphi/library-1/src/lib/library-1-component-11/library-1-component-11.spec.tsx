import { render } from '@testing-library/react';

import Library1Component11 from './library-1-component-11';

describe('Library1Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
