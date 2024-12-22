import React, { useState, useEffect } from 'react';

    function FileExplorer() {
      const [files, setFiles] = useState([]);

      useEffect(() => {
        fetch('/ls')
          .then(response => response.json())
          .then(data => setFiles(data))
          .catch(error => console.error("Error fetching files:", error));
      }, []);

      return (
        <div className="file-explorer">
          <h2>File Explorer</h2>
          <ul className="file-list">
            {files.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        </div>
      );
    }

    export default FileExplorer;
