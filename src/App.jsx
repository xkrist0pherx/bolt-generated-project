import React from 'react';
    import FileExplorer from './FileExplorer';
    import Communication from './Communication';
    import GPSNavigation from './GPSNavigation';
    import WebBrowser from './WebBrowser';
    import Settings from './Settings';
    import LLMInteraction from './LLMInteraction';
    import SpeechIO from './SpeechIO';

    function App() {
      return (
        <div className="app-container">
          <h1>Welcome to your Personal Assistant</h1>
          <p>This is the home screen.</p>
          <FileExplorer />
          <Communication />
          <GPSNavigation />
          <WebBrowser />
          <Settings />
          <LLMInteraction />
          <SpeechIO />
        </div>
      );
    }

    export default App;
