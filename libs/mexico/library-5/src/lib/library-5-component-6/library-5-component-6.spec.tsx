import { render } from '@testing-library/react';

import Library5Component6 from './library-5-component-6';

describe('Library5Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component6 />);
    expect(baseElement).toBeTruthy();
  });
});
