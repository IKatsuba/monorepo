import { render } from '@testing-library/react';

import Library3Component28 from './library-3-component-28';

describe('Library3Component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component28 />);
    expect(baseElement).toBeTruthy();
  });
});
