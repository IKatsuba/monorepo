import { render } from '@testing-library/react';

import Library2Component24 from './library-2-component-24';

describe('Library2Component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component24 />);
    expect(baseElement).toBeTruthy();
  });
});
