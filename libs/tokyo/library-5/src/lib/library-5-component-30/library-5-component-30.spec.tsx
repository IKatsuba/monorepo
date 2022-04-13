import { render } from '@testing-library/react';

import Library5Component30 from './library-5-component-30';

describe('Library5Component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component30 />);
    expect(baseElement).toBeTruthy();
  });
});
