import { render } from '@testing-library/react';

import Library3Component18 from './library-3-component-18';

describe('Library3Component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component18 />);
    expect(baseElement).toBeTruthy();
  });
});
