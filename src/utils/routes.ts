import { Express, Request, Response } from "express";

const xRoutes = (app: Express) => {
  app.get("/check", (req: Request, res: Response) => {
    res.sendStatus(200);
  });
};

export { xRoutes };
