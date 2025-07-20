import dotenv from "dotenv";
import fastify from "fastify";
import sendMailRoute from "./src/routes/sendMail.js";

dotenv.config();

const app = fastify({
  logger: true,
});

app.register(sendMailRoute);

// Health check
app.get("/", async (request, reply) => {
  return { hello: "world" };
});

const start = async () => {
  const PORT = process.env.PORT || 5000;
  try {
    await app.listen({ port: PORT, host: "0.0.0.0" }); 
  } catch (err) {
    app.log.error(err)
    process.exit(1);
  }
};

start();
