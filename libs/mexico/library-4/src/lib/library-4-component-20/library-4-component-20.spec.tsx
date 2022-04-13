import { render } from '@testing-library/react';

import Library4Component20 from './library-4-component-20';

describe('Library4Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
