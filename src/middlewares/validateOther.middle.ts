import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


@Injectable()
export class validateOthermiddlware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("console log other thing");
        next();
    }
}