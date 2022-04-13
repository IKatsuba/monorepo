import { render } from '@testing-library/react';

import Library3Component5 from './library-3-component-5';

describe('Library3Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component5 />);
    expect(baseElement).toBeTruthy();
  });
});
