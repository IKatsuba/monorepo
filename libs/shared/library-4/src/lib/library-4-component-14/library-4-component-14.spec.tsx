import { render } from '@testing-library/react';

import Library4Component14 from './library-4-component-14';

describe('Library4Component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component14 />);
    expect(baseElement).toBeTruthy();
  });
});
