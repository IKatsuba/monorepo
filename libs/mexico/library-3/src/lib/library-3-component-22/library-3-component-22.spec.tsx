import { render } from '@testing-library/react';

import Library3Component22 from './library-3-component-22';

describe('Library3Component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component22 />);
    expect(baseElement).toBeTruthy();
  });
});
