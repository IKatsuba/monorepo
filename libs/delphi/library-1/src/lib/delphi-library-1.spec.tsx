import { render } from '@testing-library/react';

import DelphiLibrary1 from './delphi-library-1';

describe('DelphiLibrary1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelphiLibrary1 />);
    expect(baseElement).toBeTruthy();
  });
});
