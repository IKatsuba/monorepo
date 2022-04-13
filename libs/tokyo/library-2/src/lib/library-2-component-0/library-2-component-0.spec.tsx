import { render } from '@testing-library/react';

import Library2Component0 from './library-2-component-0';

describe('Library2Component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component0 />);
    expect(baseElement).toBeTruthy();
  });
});
