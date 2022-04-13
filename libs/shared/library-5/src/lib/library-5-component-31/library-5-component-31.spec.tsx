import { render } from '@testing-library/react';

import Library5Component31 from './library-5-component-31';

describe('Library5Component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component31 />);
    expect(baseElement).toBeTruthy();
  });
});
