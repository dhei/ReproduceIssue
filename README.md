# Order to build and pack project

To reproduce the issue build according this order

## Steps

* Go to project cache into ProjectA>packages and run
  * `npm install`
  * `npm pack`
  * It will generate the projecta-cache-1.0.0.tgz file

* Go to project logger into ProjectA>packages and run
  * `npm install`
  * `npm pack`
  * It will generate the projecta-logger-1.0.0.tgz file

* Go to project server-core into ProjectA>packages and run
  * `npm install`
  * `npm pack`
  * It will generate the projecta-server-core-1.0.0.tgz file

* Go to project general-core into ProjectA>packages and run
  * `npm install`
  * `npm pack`
  * It will generate the projecta-general-core-1.0.0.tgz file

* Copy all generated .tgz files to a vendor folder

* Go to project ProjectB and run
  * `npm install`


## Error
```
npm WARN tarball tarball data for @projecta/logger@file:../logger/projecta-logger-1.0.0.tgz (null) seems to be corrupted. Trying again.
npm WARN tarball tarball data for @projecta/cache@file:../cache/projecta-cache-1.0.0.tgz (null) seems to be corrupted. Trying again.
npm WARN tarball tarball data for @projecta/logger@file:../logger/projecta-logger-1.0.0.tgz (null) seems to be corrupted. Trying again.
npm WARN tarball tarball data for @projecta/cache@file:../cache/projecta-cache-1.0.0.tgz (null) seems to be corrupted. Trying again.
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /home/paolosandoval/ReproduceIssue/logger/projecta-logger-1.0.0.tgz
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, open '/home/paolosandoval/ReproduceIssue/logger/projecta-logger-1.0.0.tgz'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in: /home/paolosandoval/.npm/_logs/2024-07-10T21_24_16_407Z-debug-0.log
```
