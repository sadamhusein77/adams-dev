import { BaseResponse } from '@/core/utils/base-response';

export const getExampleMock: BaseResponse<TodoDomain> =
{
  "status": {
    "code": 200,
    "message": "Success"
  },
  "data": {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
};

export default {
  getExampleMock
};
