import { LoginSuccess } from '@/core/entities/domains/login.domain';
import { BaseResponse } from '@/core/utils/base-response';

export const postSubmitOtpMock: BaseResponse<LoginSuccess> =
  {
  "status": {
    "code": 200,
    "message": "Success"
  },
  "data": {
    "token": "eyJhbGciOi...",
    "refresh_token": "eyJh..."
  }
};

export default {
  postSubmitOtpMock
};
