import { Action } from '@ngrx/store';

import { ActionReducerError } from '@syndesis/ui/platform';
import { OpenApiValidationResponse, OpenApiUploadSpecification } from '@syndesis/ui/common';
import { ApiProviderIntegration } from '@syndesis/ui/integration/api-provider/api-provider.models';

export class ApiProviderActions {
  static NEXT_STEP = '[API Provider] Go to the next step';
  static PREV_STEP = '[API Provider] Back to the previous step';
  static UPLOAD_SPEC = '[API Provider] Upload OpenApi specification source';
  static VALIDATE_SPEC = '[API Provider] OpenApi validation request';
  static VALIDATE_SPEC_COMPLETE = '[API Provider] OpenApi validation complete';
  static VALIDATE_SPEC_FAIL = '[API Provider] OpenApi validation failed';
  static EDIT_SPEC = '[API Provider] Show Apicurio editor';
  static UPDATE_SPEC = '[API Provider] Update specification with the value coming from Apicurio';
  static CREATE = '[API Provider] Create integration request';
  static CREATE_COMPLETE = '[API Provider] Create integration complete';
  static CREATE_FAIL = '[API Provider] Create integration failed';
  static CREATE_CANCEL = '[API Provider] Create API Provider integration cancelled';

  static nextStep(): ApiProviderNextStep {
    return new ApiProviderNextStep();
  }

  static previousStep(): ApiProviderPreviousStep {
    return new ApiProviderPreviousStep();
  }

  static uploadSpecification(
    payload: OpenApiUploadSpecification
  ): ApiProviderUploadSpecification {
    return new ApiProviderUploadSpecification(payload);
  }

  static validateSwagger(): ApiProviderValidateSwagger {
    return new ApiProviderValidateSwagger();
  }

  static validateSwaggerComplete(
    payload: OpenApiValidationResponse
  ): ApiProviderValidateSwaggerComplete {
    return new ApiProviderValidateSwaggerComplete(payload);
  }

  static validateSwaggerFail(
    payload: ActionReducerError
  ): ApiProviderValidateSwaggerFail {
    return new ApiProviderValidateSwaggerFail(payload);
  }

  static editSpecification(): ApiProviderEditSpecification {
    return new ApiProviderEditSpecification();
  }

  static updateSpecification(
    payload: string
  ): ApiProviderUpdateSpecification {
    return new ApiProviderUpdateSpecification(payload);
  }

  static createIntegration(): ApiProviderCreate {
    return new ApiProviderCreate();
  }

  static createCancel(): ApiProviderCreateCancel {
    return new ApiProviderCreateCancel();
  }
}

export class ApiProviderNextStep implements Action {
  readonly type = ApiProviderActions.NEXT_STEP;
}

export class ApiProviderPreviousStep implements Action {
  readonly type = ApiProviderActions.PREV_STEP;
}

export class ApiProviderUploadSpecification implements Action {
  readonly type = ApiProviderActions.UPLOAD_SPEC;
  constructor(public payload: OpenApiUploadSpecification) {}
}

export class ApiProviderValidateSwagger implements Action {
  readonly type = ApiProviderActions.VALIDATE_SPEC;
}

export class ApiProviderValidateSwaggerComplete implements Action {
  readonly type = ApiProviderActions.VALIDATE_SPEC_COMPLETE;
  constructor(public payload: OpenApiValidationResponse) {}
}

export class ApiProviderValidateSwaggerFail implements Action {
  readonly type = ApiProviderActions.VALIDATE_SPEC_COMPLETE;
  constructor(public payload: ActionReducerError) {}
}

export class ApiProviderCreateCancel implements Action {
  readonly type = ApiProviderActions.CREATE_CANCEL;
}

export class ApiProviderEditSpecification implements Action {
  readonly type = ApiProviderActions.EDIT_SPEC;
}

export class ApiProviderUpdateSpecification implements Action {
  readonly type = ApiProviderActions.UPDATE_SPEC;
  constructor(public payload: string) {}
}

export class ApiProviderCreate implements Action {
  readonly type = ApiProviderActions.CREATE;
}

export class ApiProviderCreateComplete implements Action {
  readonly type = ApiProviderActions.CREATE_COMPLETE;
  constructor(public payload: ApiProviderIntegration) {}
}

export class ApiProviderCreateFail implements Action {
  readonly type = ApiProviderActions.CREATE_FAIL;
  constructor(public payload: ActionReducerError) {}
}
