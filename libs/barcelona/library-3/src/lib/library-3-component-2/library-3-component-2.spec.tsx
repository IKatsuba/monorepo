import { render } from '@testing-library/react';

import Library3Component2 from './library-3-component-2';

describe('Library3Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
