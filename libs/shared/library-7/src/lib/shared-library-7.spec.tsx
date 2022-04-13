import { render } from '@testing-library/react';

import SharedLibrary7 from './shared-library-7';

describe('SharedLibrary7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary7 />);
    expect(baseElement).toBeTruthy();
  });
});
