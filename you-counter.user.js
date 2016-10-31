// ==UserScript==
// @name          (You) counter
// @namespace     http://github.com/GeneralUnRest/you-counter
// @description   goes through posts and finds those containing a (You), tallys them up and displays them
// @include       http*://boards.4chan.org/*/thread/*
// @version       1.4
// ==/UserScript==

/* Copyright (c) 2016 prussian 
 * prussian <genunrest@gmail.com>
 * joe_dirt <anon6000@cock.li>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


var originalTitle

var getYous = () => {
    var yous = [].slice.call(
        document.getElementsByTagName('a')
    ).filter((currentValue) => { 
        return currentValue.innerHTML.search('(You)') > -1
    }).length
    
    if (!originalTitle) originalTitle = document.title
    document.title = `(You)'s ${yous} :: ${originalTitle}`
}

document.addEventListener('4chanThreadUpdated', () => {
    getYous()
}, false)

document.addEventListener('ThreadUpdate', () => {
    getYous()
}, false)

getYous()
