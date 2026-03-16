# Lab 5: Music Discovery App

This lab implements a Music Discovery Application that allows users to search for artists and discover similar artists using the MusicBrainz API. The application demonstrates working with external APIs, asynchronous JavaScript (async/await), error handling, and dynamic DOM manipulation. It showcases modern JavaScript concepts including fetch API integration, server-side routing with Express.js, and real-time user feedback.

* *Date Created*: 13 Mar 2026
* *Last Modification Date*: 16 Mar 2026
* *Netlfiy URL*: 
* *Git URL*: https://git.cs.dal.ca/danso/csci-3172.git


## Authors

* Evans Danso (ev320686@dal.ca) - Developer


## Built With

* [HTML5](https://html.spec.whatwg.org/) 
* [CSS3](https://www.w3.org/Style/CSS/) 
* [Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MusicBrainz API](https://musicbrainz.org/doc/Development/XML_Web_Service)
* [Bootstrap 5](https://getbootstrap.com/)


##  Features

1. **Artist Search**
   - Search for artists by name using the MusicBrainz API
   - Real-time API requests with async/await
   - Returns up to 10 artist results per search

2. **Dynamic Results Display**
   - Results displayed in a responsive list format
   - Clean presentation using Bootstrap styling
   - Real-time rendering of search results

3. **Error Handling**
   - User-friendly error messages for invalid input
   - Server-side error handling for API failures
   - Client-side validation and feedback




## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```
   Or run directly:
   ```bash
   node server.js
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## How to Use

### Searching for Artists
1. Navigate to the application in your browser (http://localhost:3000)
2. Enter an artist name in the search input field
3. Click the "Search" button
4. View the results in the "Results" section below
5. Results will display up to 10 artists matching your search

### Features
- **Real-time Search**: Enter any artist name to search the MusicBrainz database
- **Multiple Results**: Discover multiple artists matching your search query
- **Error Handling**: Clear feedback if no artists are found or if an error occurs
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## API Information

This application uses the **MusicBrainz API** to search for artists:
- **Endpoint**: `https://musicbrainz.org/ws/2/artist/`
- **Method**: GET
- **Parameters**: 
  - `query`: Artist name to search for
  - `fmt`: Response format (json)

## Project Structure

```
lab5/
├── public/
│   ├── index.html      # Main HTML page
│   ├── script.js       # Client-side JavaScript (search functionality)
│   └── style.css       # Styling
├── server.js           # Express server with API proxy
├── package.json        # Node.js dependencies
└── README.md           # This file
```




