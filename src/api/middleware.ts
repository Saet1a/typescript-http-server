import type { Request, Response, NextFunction } from "express";

export function middlewareLogResponses(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.on("finish", () => {
  const statuscode = res.statusCode;
  if(statuscode < 200 || statuscode >= 300) {
    console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${statuscode}`);
  }
});
next();
}