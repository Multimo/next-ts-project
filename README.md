# next-ts-project
Small App built using Typescript, Next js &amp; Mobx State Tree

## Commands

To run as in development mode
```
npm run dev
```

To run tests
```
npm run test
```

To build
```
npm run build
```

To start built, note: next will look for production env when running the server
```
npm run start
```

## Choices

### Next js

I used Next js for code spliting on pages and SSR out of the box and its very quick to get going

Although in a more large scale / production grade project its worth doing these by hand

### Mobx State Tree

Im trying out this technology as its got some interesting features and I have never used it before.

- Mobx is faster / easier to achieve re-rendering within react than react-redux
- 

### Typescript

Static typing in any project is the way to go nowadays. Its got a load of useful features 

and the commmunity behind it is massive.


Todo:

[] - login entry page => ? firebase login system ?
[x] - individual post with comments and photos
[] - sorting / filter on the posts / albums / Photos by user /alphabetically
[x] - add css / make things look nice
[] - server LSU caching
[] - add text compression
[] - unit tests
[] - PWA?
[] - deploy with Now
