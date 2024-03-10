import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { QueryFailedError, UpdateValuesMissingError } from "typeorm";
import { Request,Response } from "express";


@Catch(QueryFailedError,UpdateValuesMissingError)
export class TypeORMQueryExceptionFilter implements ExceptionFilter{

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        response.status(500).send({message:"Error",exception:exception.sqlMessage|| exception.message})
    }

}