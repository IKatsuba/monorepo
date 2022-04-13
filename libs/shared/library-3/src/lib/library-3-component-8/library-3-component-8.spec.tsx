import { render } from '@testing-library/react';

import Library3Component8 from './library-3-component-8';

describe('Library3Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component8 />);
    expect(baseElement).toBeTruthy();
  });
});
