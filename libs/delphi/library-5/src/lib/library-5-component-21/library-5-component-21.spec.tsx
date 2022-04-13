import { render } from '@testing-library/react';

import Library5Component21 from './library-5-component-21';

describe('Library5Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
