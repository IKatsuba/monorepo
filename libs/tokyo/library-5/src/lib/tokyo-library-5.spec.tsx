import { render } from '@testing-library/react';

import TokyoLibrary5 from './tokyo-library-5';

describe('TokyoLibrary5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokyoLibrary5 />);
    expect(baseElement).toBeTruthy();
  });
});
