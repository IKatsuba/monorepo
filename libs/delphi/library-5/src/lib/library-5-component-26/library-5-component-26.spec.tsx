import { render } from '@testing-library/react';

import Library5Component26 from './library-5-component-26';

describe('Library5Component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component26 />);
    expect(baseElement).toBeTruthy();
  });
});
