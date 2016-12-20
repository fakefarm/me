# HTML 5 Offline

Learned from watching Pluralsight's Offline application course

offline application allows the ability for an application to 

Essentially it's a combination of browser events + application cache

html5 introduction is the **application cache**

## Typical anatomy of an offline application
- manifest
- assets
- application cache
- online status awareness

### Manifest attribute

`<html manifest='foo.'>`

### online status awareness

part of navigator.object


## Cache Manifest file
everything is based on cache file

Has 4 main parts
### Top of file
At the top of the file, the first line must say **CACHE MANIFEST**
### CACHE:
lists out all the parts of the file that will be cached. It's important to note that all files must successfully download or the cache will not work. If you receive a 404 from any file then  it will all break

### NETWORK:
these are the files that will not be cached

### FALLBACK:
a space separated list of urls if there is a problem

### Mime type:
must be set to **text/cache-manifest**

#### Encoding:
must be set to utf-8
