// when a req comes in, gonna provide a schema and validate the req against the schema
// e.g create an user -> required email + pass in req.body -> make sure both field present + both str + email field is actually an email str

import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

// ??? currying
const validate = (schema: AnyZodObject) => (req: Request, res: Response, _next: NextFunction) => {
  try {
    // ???
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { validate };
