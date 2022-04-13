import { render } from '@testing-library/react';

import Library5Component18 from './library-5-component-18';

describe('Library5Component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component18 />);
    expect(baseElement).toBeTruthy();
  });
});
