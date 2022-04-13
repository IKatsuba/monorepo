import { render } from '@testing-library/react';

import Library3Component30 from './library-3-component-30';

describe('Library3Component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component30 />);
    expect(baseElement).toBeTruthy();
  });
});
