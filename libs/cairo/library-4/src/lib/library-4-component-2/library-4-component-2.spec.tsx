import { render } from '@testing-library/react';

import Library4Component2 from './library-4-component-2';

describe('Library4Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
