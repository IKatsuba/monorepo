import { render } from '@testing-library/react';

import Library1Component18 from './library-1-component-18';

describe('Library1Component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component18 />);
    expect(baseElement).toBeTruthy();
  });
});
