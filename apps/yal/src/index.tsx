/* @refresh reload */
import { appWindow } from '@tauri-apps/api/window';
import { App } from 'components/App';
import { Router, Route } from "@solidjs/router";
import { render } from 'solid-js/web';
import { handleKeydown } from 'utils/keyboard';
import './app.css';

render(
  () => (
    <div onkeydown={handleKeydown(appWindow)}>
      <Router>
          <Route path="/" component={App} />
      </Router>
    </div>
  ),
  document.getElementById('root') as HTMLElement
);
