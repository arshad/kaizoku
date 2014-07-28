Kaizoku
===
A CLI for thepiratebay.

[![Build Status](https://travis-ci.org/arshad/kaizoku.svg?branch=master)](https://travis-ci.org/arshad/kaizoku)

**You might also be interested in [subdb-cli](https://github.com/arshad/subdb-cli), download subtitles from the CLI.**

Installation
--------------

    npm install kaizoku -g

Usage
--------------

#### Download

    kaizoku download "Game of Thrones s01e01"
    
This will automatically:

* Search for "Game of Thrones s01e01" on thepiratebay.se.
* Find the best match.
* Get the torrent with the most seeds.
* Get the magnet link for the torrent and display it.
* Open your torrent client and start the download (Mac only).

#### Search

    kaizoku search "Game of Thrones s01e01"
    
![alt tag](https://raw.githubusercontent.com/arshad/kaizoku/master/screenshot.png)

#### Top
Displays a list of top torrents by category.

    kaizoku top movies

    kaizoku top tvshows
    
To see a list of all categories:

    kaizoku cat

#### Custom URL for thepiratebay (thanks to [fazo96](https://github.com/fazo96))

    kaizoku search "Keywords" --url http://pirateproxy.in

License
--------------

The MIT License (MIT)

Copyright (c) 2014 Arshad Chummun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

  
