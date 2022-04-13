import { render } from '@testing-library/react';

import Library2Component20 from './library-2-component-20';

describe('Library2Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
