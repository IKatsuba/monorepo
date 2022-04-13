import { render } from '@testing-library/react';

import Library5Component20 from './library-5-component-20';

describe('Library5Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
