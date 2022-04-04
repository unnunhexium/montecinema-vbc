# montecinema

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Tests
```
npm run test
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Development API
By default this expects a local version of the [montecinema API](https://github.com/monterail/monte-cinema) to be running.
```
- clone repository
- run [docker](https://www.docker.com/) 
- in terminal of cloned api repository run command: make start 
- in second terminal run command: docker-compose exec foreman bin/rails db:setup
- [visit](http://localhost:3000)
