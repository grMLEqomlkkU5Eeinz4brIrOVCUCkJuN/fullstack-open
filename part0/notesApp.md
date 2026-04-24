```mermaid
sequenceDiagram
 participant browser
 participant server

 browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
 activate server
 server-->>browser: HTML document
 deactivate server

 browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
 activate server
 server-->>browser: the css file
 deactivate server

 browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
 activate server
 server-->>browser: the JavaScript file
 deactivate server

 Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

 browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
 activate server
 server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
 deactivate server

 Note right of browser: The browser executes the callback function that renders the notes

 browser->>server: POST https://studies.cs.helsinki.fi/exmapleapp/newnote
 activate server
 server-->>browser: status code 302, redirect back to https://studies.cs.helsinki.fi/exampleapp/notes
 deactivate server

 Note right of browser: As a redirect request was sent, it needs to reload the contents from the /notes endpoint

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
 activate server
 server-->>browser: HTML document
 deactivate server

 browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
 activate server
 server-->>browser: the css file
 deactivate server

 browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
 activate server
 server-->>browser: the JavaScript file
 deactivate server

 Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

 browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
 activate server
 server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
 deactivate server

 Note right of browser: The browser executes the callback function that renders the notes

```
load notes file -> fetches from data endpoint -> renders on client side -> make request -> get redirection to notes file (effectively a reload) -> send a new request and load notes file again (but with all the new notes instead) -> fetches from data endpoint with new note -> renders on client side
