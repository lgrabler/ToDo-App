import { render } from '@testing-library/react';
import App from './App';

// Hier wird getestet, ob die App-Komponente ohne Fehler gerendert werden kann
test('should render App', () => {
  render(<App />);
});

// Hier wird getestet, ob die App-Komponente ohne Fehler gerendert werden kann
// Es können noch weitere Tests hinzugefügt werden, um die Funktionalität der App zu testen