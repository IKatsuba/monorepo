import { render } from '@testing-library/react';

import Library5Component8 from './library-5-component-8';

describe('Library5Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component8 />);
    expect(baseElement).toBeTruthy();
  });
});
