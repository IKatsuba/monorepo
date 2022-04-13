import { render } from '@testing-library/react';

import Library5Component0 from './library-5-component-0';

describe('Library5Component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component0 />);
    expect(baseElement).toBeTruthy();
  });
});
