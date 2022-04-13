import { render } from '@testing-library/react';

import Library3Component16 from './library-3-component-16';

describe('Library3Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
