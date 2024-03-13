import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';

@Catch()
export class InternalServerErrorExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    let { message: errMsg, stack: errStack, name: errName } = exception;

    let ctx = host.switchToHttp();
    let res = ctx.getResponse();

    res.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

    // HttpException Error
    if (exception instanceof HttpException) {
      // set httpException res to res
      res.status(exception.getStatus()).json(exception.getResponse());
      return;
    }
    // other error to rewirte InternalServerErrorException response
    res.status(500).send({
      //"exception":exception,
      statusCode: res.statusCode,
      errMsg: errMsg,
      errName: errName,

      //"statusName":statusName,
      //"request":req,
      errStack: errStack,
    });
  }
}
