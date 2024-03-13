import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class ExceptionHandler implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
