import { render } from '@testing-library/react';

import Library1Component26 from './library-1-component-26';

describe('Library1Component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component26 />);
    expect(baseElement).toBeTruthy();
  });
});
