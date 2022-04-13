import { render } from '@testing-library/react';

import TokyoLibrary4 from './tokyo-library-4';

describe('TokyoLibrary4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokyoLibrary4 />);
    expect(baseElement).toBeTruthy();
  });
});
