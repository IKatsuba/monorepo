import { render } from '@testing-library/react';

import SharedLibrary1 from './shared-library-1';

describe('SharedLibrary1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary1 />);
    expect(baseElement).toBeTruthy();
  });
});
