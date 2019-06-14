# mgh-storage-factory

Just a library to help with JSON and local/session storage.

## Install

```
npm install mgh-storage-factory --save
```

## Usage

```
import * as StorageFactory from 'mgh-storage-factory';

StorageFactory.get( 'key' );

StorageFactory.set( 'key', { foo: 'bar' } );

StorageFactory.sessionGet( 'key' );

StorageFactory.sessionSet( 'key', { foo: 'bar' } );
``` 