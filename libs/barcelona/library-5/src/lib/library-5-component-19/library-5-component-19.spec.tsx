import { render } from '@testing-library/react';

import Library5Component19 from './library-5-component-19';

describe('Library5Component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component19 />);
    expect(baseElement).toBeTruthy();
  });
});
