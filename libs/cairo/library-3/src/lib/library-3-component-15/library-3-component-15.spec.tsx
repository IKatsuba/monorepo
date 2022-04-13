import { render } from '@testing-library/react';

import Library3Component15 from './library-3-component-15';

describe('Library3Component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component15 />);
    expect(baseElement).toBeTruthy();
  });
});
