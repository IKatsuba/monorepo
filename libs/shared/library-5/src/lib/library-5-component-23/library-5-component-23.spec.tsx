import { render } from '@testing-library/react';

import Library5Component23 from './library-5-component-23';

describe('Library5Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component23 />);
    expect(baseElement).toBeTruthy();
  });
});
