import dotenv from "dotenv";
import fastify from "fastify";
import sendMailRoute from "./src/routes/sendMail.js";

dotenv.config();

const fastify = fastify({
    logger: true,
  });

  fastify.register(sendMailRoute);
  // Health check
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });
  
  const start = async () => {
    const PORT = process.env.PORT || 5000;
    try {
      await fastify.listen({ port: PORT });
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  
  start();
  