import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class TypeORMQueryExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
