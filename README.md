# Uniswap V2 Fork

This project forks uniswaps core and migrations.

## Installation

Open terminal
```
ganache-cli
```

Open new terminal
```
cd core
npm i
truffle migrate
cd ..
```

Copy the UniswapV2Factory address from the truffle output and paste in on line 7 of periphery/migrations/2_deploy.js

```
cd periphery
npm i 
truffle migrate
cd ..
```

Fill in the line 8 - 11 of migrator/migrations/2_deploy.js for the addresses for the chain you want to deploy on

```
cd migrator
npm i
```


