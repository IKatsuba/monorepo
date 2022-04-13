import { render } from '@testing-library/react';

import Library3Component11 from './library-3-component-11';

describe('Library3Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
