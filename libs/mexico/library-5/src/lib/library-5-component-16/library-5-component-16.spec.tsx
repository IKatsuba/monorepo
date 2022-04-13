import { render } from '@testing-library/react';

import Library5Component16 from './library-5-component-16';

describe('Library5Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
