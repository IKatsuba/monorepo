import { render } from '@testing-library/react';

import Library1Component31 from './library-1-component-31';

describe('Library1Component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component31 />);
    expect(baseElement).toBeTruthy();
  });
});
