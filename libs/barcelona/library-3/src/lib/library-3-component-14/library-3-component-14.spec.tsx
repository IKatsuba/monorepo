import { render } from '@testing-library/react';

import Library3Component14 from './library-3-component-14';

describe('Library3Component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component14 />);
    expect(baseElement).toBeTruthy();
  });
});
