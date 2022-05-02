export class HttpCodes {
  /* the request has not been applied because it lacks
    valid authentication credentials for the target resource.
   **/
  static readonly UNAUTHORIZED = {
    CODE: 401,
    DESCRIPTION: 'Bad credentials'
  };
  static readonly GENERAL = {
    CODE: 500,
    DESCRIPTION: 'Internal Server Error'
  };
}
