import { inputText, setInputText } from 'state/input';
import { tailwindClasses } from 'state/theme';
import { SearchIcon } from './icons/SearchIcon';

export function Input() {
  return (
    <div
      data-id="main-input-wrapper"
      class={tailwindClasses()['main-input-wrapper']}
    >
      <SearchIcon />
      <input
        class={tailwindClasses()['main-input']}
        data-id="main-input"
        value={inputText()}
        onInput={(e) => setInputText(e.currentTarget.value)}
        type="text"
        placeholder="Search for apps and commands..."
        role="combobox"
        aria-expanded="false"
        aria-controls="options"
        // @ts-ignore
        autoCorrect="off"
        autoCapitalize="off"
        autofocus
        spellcheck={false}
      />
    </div>
  );
}
