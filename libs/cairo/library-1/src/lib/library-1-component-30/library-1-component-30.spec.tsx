import { render } from '@testing-library/react';

import Library1Component30 from './library-1-component-30';

describe('Library1Component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component30 />);
    expect(baseElement).toBeTruthy();
  });
});
