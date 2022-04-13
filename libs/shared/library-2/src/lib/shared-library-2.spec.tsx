import { render } from '@testing-library/react';

import SharedLibrary2 from './shared-library-2';

describe('SharedLibrary2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary2 />);
    expect(baseElement).toBeTruthy();
  });
});
