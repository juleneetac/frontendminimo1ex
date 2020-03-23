Instalaremos el paquete typescript
npm install typescript -s


npm install ts-node-dev -s


Dentro de nuestro package.json añadiremos dos scripts más.

"scripts": {
    "tsc": "tsc",
    "dev": "ts-node-dev --respawn --transpileOnly ./app/app.ts",
    "prod": "tsc && node ./build/app.js"
},



Para iniciar el entorno de desarrollo:
npm run dev