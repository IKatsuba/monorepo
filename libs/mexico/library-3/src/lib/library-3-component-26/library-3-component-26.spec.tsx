import { render } from '@testing-library/react';

import Library3Component26 from './library-3-component-26';

describe('Library3Component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component26 />);
    expect(baseElement).toBeTruthy();
  });
});
