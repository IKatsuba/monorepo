import { render } from '@testing-library/react';

import Library4Component26 from './library-4-component-26';

describe('Library4Component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component26 />);
    expect(baseElement).toBeTruthy();
  });
});
