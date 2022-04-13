import { render } from '@testing-library/react';

import Library5Component5 from './library-5-component-5';

describe('Library5Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component5 />);
    expect(baseElement).toBeTruthy();
  });
});
