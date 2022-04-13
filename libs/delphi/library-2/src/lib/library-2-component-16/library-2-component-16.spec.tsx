import { render } from '@testing-library/react';

import Library2Component16 from './library-2-component-16';

describe('Library2Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
