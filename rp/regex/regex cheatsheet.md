# regex cheatsheet

## Problem
Wanted to get all my notes that start with `_dw` except the ones that were followed by ‘blocked’. So, I wanted `_dw note` and `_dw study` but not `_dw blocked`

## Solution

	_dw [^blocked](.*)
	
[SO](http://stackoverflow.com/questions/1687620/regex-match-everything-but)