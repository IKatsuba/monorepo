import { render } from '@testing-library/react';

import TokyoLibrary7 from './tokyo-library-7';

describe('TokyoLibrary7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokyoLibrary7 />);
    expect(baseElement).toBeTruthy();
  });
});
