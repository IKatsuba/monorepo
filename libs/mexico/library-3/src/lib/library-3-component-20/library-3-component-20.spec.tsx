import { render } from '@testing-library/react';

import Library3Component20 from './library-3-component-20';

describe('Library3Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
