# Kurdish Proverbs <br>

This package will generate random Kurdish (Kurmanji) proverbs and quotes.
<br> 

### Usage: <br> 

1. Installation:
```shell
npm i kurdish-proverbs
```
Or using `yarn`:
```shell
yarn add kurdish-proverbs
```


2. Use it as following:
```javascript
import KurdishProverbs from 'kurdish-proverbs'

//You can use proverbs_only, proverbs_with_quotes or old_proverbs
const generatedProverbs = KurdishProverbs.generate(1, 'proverbs_only')

//Print it
console.log(generatedProverbs[0])
```

<br>

### Test:<br>
You can test using `Mocha`:<br>

```shell
npm test
```