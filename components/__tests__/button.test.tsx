import { render, screen } from '@testing-library/react';
import Button from '../button';

describe('Button', () => {
  test('renders with the given props and message', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  });
});
