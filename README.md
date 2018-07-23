# next-ts-project
Small Web App built using Typescript, Next js &amp; Mobx State Tree.

This app is using server side rendering for a faster Initial render and also better theoretical SEO.

It also has code spliting so we send the minimal amount of JS per route.

Note all these images are just random and none of this part has been optimised.


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

### Tachyons

Very small functional css design system using `atomic css`. Bacially means its one style per class.

Makes everything very simple and functional. If i had more time I would show how to parse the html and only return the used classes.

On its own its very small and comes with helpful reciepes which I used here. 

#### Todo:

```
[] - login entry page => ? firebase login system ?
[x] - individual post with comments and photos
[x] - sorting / filter on the posts / albums / Photos by user /alphabetically
[x] - add css / make things look nice
[x] - unit tests
[] - server LSU caching
[] - add text compression
[] - PWA?
[] - deploy with Now
```