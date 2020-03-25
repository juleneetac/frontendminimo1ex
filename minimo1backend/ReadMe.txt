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



A la hora de poner un estudiante en una asignatura, tengo que poner el id de la asignatura y el del estudiante. en tipo:
{
	"subject":"5e7b344db65a6a18cd375ba0",
	"student":"idestudiante"
}