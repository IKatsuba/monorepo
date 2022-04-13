import { render } from '@testing-library/react';

import Library4Component16 from './library-4-component-16';

describe('Library4Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
