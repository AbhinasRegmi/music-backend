import { z } from "zod";
import { StatusCodes } from "http-status-codes";
import { type Request, type Response, type NextFunction } from "express";

export function validate(
    { param, query, body }: { param?: z.ZodType<any, any, any>, query?: z.ZodType<any, any, any>, body?: z.ZodType<any, any, any> }
) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (param) {
                param.parse(req.param);
            }

            if (query) {
                query.parse(req.params);
            }

            if (body) {
                 body.parse(req.body);

            }

            next();
        } catch (e) {
            if (e instanceof z.ZodError) {

                const errorMessage = e.errors.map(
                    (issue) => ({
                        message: `${issue.path.join('.')}:  ${issue.message}`,
                    })
                );

                res.status(StatusCodes.BAD_REQUEST).json({
                    ok: false,
                    error: errorMessage,

                });
            } else {

                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    ok: false,
                    error: "Internal Server Error"
                });
            }
        }
    }
}