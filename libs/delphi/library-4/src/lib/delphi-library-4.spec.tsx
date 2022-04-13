import { render } from '@testing-library/react';

import DelphiLibrary4 from './delphi-library-4';

describe('DelphiLibrary4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelphiLibrary4 />);
    expect(baseElement).toBeTruthy();
  });
});
