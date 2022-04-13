import { render } from '@testing-library/react';

import Library2Component23 from './library-2-component-23';

describe('Library2Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component23 />);
    expect(baseElement).toBeTruthy();
  });
});
