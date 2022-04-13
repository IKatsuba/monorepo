import { render } from '@testing-library/react';

import Library5Component7 from './library-5-component-7';

describe('Library5Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
