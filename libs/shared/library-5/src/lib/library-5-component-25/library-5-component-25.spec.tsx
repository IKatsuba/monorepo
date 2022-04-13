import { render } from '@testing-library/react';

import Library5Component25 from './library-5-component-25';

describe('Library5Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
