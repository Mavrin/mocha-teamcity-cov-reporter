https://github.com/visionmedia/mocha/wiki/Third-party-reporters describes using third party reporters in mocha.

Basically, have your project's package.json be like:

``` js
{  
  "devDependencies": {  
    "mocha-teamcity-covegare-reporter": "1.0.0"  
  }  
}
```

Then call mocha with:

`mocha --reporter mocha-teamcity-cov-reporter test`
