import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PrefItem from './PrefItem/PrefItem';

function App() {
  const items = [
    {
      label: 'Remove background for uploaded person images',
      help: 'Automatically remove the background of images that are uploaded to a specific Person. This could increase the quality of the detected hits.',
      value: false,
    },
    {
      label: 'Enable person functionality',
      help: 'Enables face detection, person search & other related functionality',
      value: true,
    },
    {
      label: 'Enable audio functionality',
      help: 'Enables audio upload & other related functionality.',
      value: false,
    },
    {
      label: 'Enable file functionality',
      help: 'Enables file upload & other related functionality.',
      value: true,
    },
    {
      label: 'Enable label functionality',
      help: 'Enables label detection & other related functionality.',
      value: true,
    },
    {
      label: 'Enable tag functionality',
      help: 'Enables automatic tagging of IPTC tags when ingesting video & images.',
      value: false,
    },
  ];

  return (
    <div style={{ backgroundColor: '#121722', width: '100%' }}>
      <div className="card">
        {items.map((e, i) => (
          <PrefItem
            id={'ab' + i}
            onToggle={(val) =>
              console.log('Toggled for #ab' + i + ', value=', val)
            }
            label={e.label}
            helpText={e.help}
            value={e.value}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
