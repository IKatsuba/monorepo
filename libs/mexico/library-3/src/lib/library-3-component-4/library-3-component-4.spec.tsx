import { render } from '@testing-library/react';

import Library3Component4 from './library-3-component-4';

describe('Library3Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
