const { ApolloServer } = require("apollo-server");
const config = require("./config/keys");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const server = new ApolloServer({
  modules: [
    require("./modules/location/module"),
    require("./modules/product/module"),
    require("./modules/pages/module"),
  ],
});

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluste.fork();
  });
} else {
  server.listen({ port: config.port }).then(({ url }) => {
    console.log(`server started at ` + url);
  });

  console.log(`Worker ${process.pid} started`);
}
