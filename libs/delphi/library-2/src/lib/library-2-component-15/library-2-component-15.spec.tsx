import { render } from '@testing-library/react';

import Library2Component15 from './library-2-component-15';

describe('Library2Component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component15 />);
    expect(baseElement).toBeTruthy();
  });
});
