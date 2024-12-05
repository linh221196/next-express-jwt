A backend server run TS, Nodejs, Express w/ JWT and MVC design Patern

Src: https://blog.logrocket.com/how-to-set-up-node-typescript-express/#creating-package-json-file

npm i express dotenv
The DotEnv package is used to read environment variables from a .env file

npm i -D typescript @types/express @types/node
The -D, or --dev, flag directs the package manager to install these libraries as development dependencies.
w/ airbnb eslint
npm install -D typescript ts-node @types/node @types/express eslint eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-prettier prettier

npx tsc --init
Generate tsconfig.json

npm i -D nodemon ts-node concurrently
Command to integrate nodemon and ts-node as development dependencies

{
"scripts": {
"build": "npx tsc",
"start": "node dist/index.js",
"dev": "nodemon src/index.ts"
}
}

"scripts": {
"start": "node dist/index.js", // For production
"build": "tsc", // To compile TypeScript
"dev": "nodemon --watch src --exec ts-node src/index.ts", // Hot-reloading with nodemon
"lint": "eslint . --ext .ts", // Linting
"format": "prettier --write ." // Code formatting
}

npm install tsconfig-paths --save

bootstrap:

<!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
