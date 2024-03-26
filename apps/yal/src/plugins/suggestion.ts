import { YalPlugin } from '@yal-app/types';

const initialResults = [
  {
    name: `AI Chat`,
    description: 'Chat with GPT',
    icon: '💬',
  },
  {
    name: `Pile`,
    description: 'Pile with GPT',
    icon: '✨',
  },
  {
    name: `Screenshot`,
    description: 'Screenshot A picture',
    icon: '🔒',
  },
];

const getScriptCommand = (name: string): string => {
  switch (name) {
    case 'Sleep':
      return 'tell application "Finder" to sleep';
  }
  throw new Error('Unknown action');
};

export const Suggestion: YalPlugin = (args) => {
  args.setState({
    heading: `Suggestions`,
    action: (result) => {
      if (result.item.name) {
        yal.shell.appleScript({ command: getScriptCommand(result.item.name) });
      }
    },
    state: initialResults,
  });
};

export default Suggestion;
