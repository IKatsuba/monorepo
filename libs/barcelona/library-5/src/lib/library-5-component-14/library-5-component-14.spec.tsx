import { render } from '@testing-library/react';

import Library5Component14 from './library-5-component-14';

describe('Library5Component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component14 />);
    expect(baseElement).toBeTruthy();
  });
});
