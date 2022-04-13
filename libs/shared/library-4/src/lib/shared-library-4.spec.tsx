import { render } from '@testing-library/react';

import SharedLibrary4 from './shared-library-4';

describe('SharedLibrary4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary4 />);
    expect(baseElement).toBeTruthy();
  });
});
