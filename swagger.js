import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

export const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Welcome API",
        description: "Welcomes all the users to application",
        contact: {
          name: "WBD group 18",
        },
      },
      servers: ["http://localhost:5000"],
    },
    apis: ["swagger.js"],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);

