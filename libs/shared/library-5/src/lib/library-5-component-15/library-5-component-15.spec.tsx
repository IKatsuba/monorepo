import { render } from '@testing-library/react';

import Library5Component15 from './library-5-component-15';

describe('Library5Component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component15 />);
    expect(baseElement).toBeTruthy();
  });
});
