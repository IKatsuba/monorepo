import { render } from '@testing-library/react';

import Library2Component1 from './library-2-component-1';

describe('Library2Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
