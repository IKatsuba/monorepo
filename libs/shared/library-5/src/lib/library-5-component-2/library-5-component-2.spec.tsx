import { render } from '@testing-library/react';

import Library5Component2 from './library-5-component-2';

describe('Library5Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
