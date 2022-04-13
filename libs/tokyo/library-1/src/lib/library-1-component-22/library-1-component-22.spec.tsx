import { render } from '@testing-library/react';

import Library1Component22 from './library-1-component-22';

describe('Library1Component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component22 />);
    expect(baseElement).toBeTruthy();
  });
});
