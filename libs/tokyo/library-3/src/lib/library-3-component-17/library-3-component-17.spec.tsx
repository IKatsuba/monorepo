import { render } from '@testing-library/react';

import Library3Component17 from './library-3-component-17';

describe('Library3Component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component17 />);
    expect(baseElement).toBeTruthy();
  });
});
