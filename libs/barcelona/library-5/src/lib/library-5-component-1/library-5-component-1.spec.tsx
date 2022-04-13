import { render } from '@testing-library/react';

import Library5Component1 from './library-5-component-1';

describe('Library5Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
