import { render } from '@testing-library/react';

import Library3Component31 from './library-3-component-31';

describe('Library3Component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component31 />);
    expect(baseElement).toBeTruthy();
  });
});
