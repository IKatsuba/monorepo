import { render } from '@testing-library/react';

import Library3Component19 from './library-3-component-19';

describe('Library3Component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component19 />);
    expect(baseElement).toBeTruthy();
  });
});
