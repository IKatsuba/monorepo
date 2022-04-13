import { render } from '@testing-library/react';

import Library4Component30 from './library-4-component-30';

describe('Library4Component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component30 />);
    expect(baseElement).toBeTruthy();
  });
});
