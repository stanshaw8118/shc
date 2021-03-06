// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export enum ErrorCode {
    ERROR = 100,
    DATA_FILE_NOT_FOUND,
    SCHEMA_FILE_NOT_FOUND,
    LOG_PATH_NOT_FOUND,
    SCHEMA_ERROR,
    INFLATION_ERROR,
    JWS_VERIFICATION_ERROR,
    QR_DECODE_ERROR,
    ISSUER_KEY_DOWNLOAD_ERROR,
    INVALID_SHC_STRING,
    NOT_IMPLEMENTED,
    UNKNOWN_FILE_DATA, // 110
    JSON_PARSE_ERROR,
    CRITICAL_DATA_MISSING,
    JWS_TOO_LONG,
    INVALID_FILE_EXTENSION,
    
    INVALID_MISSING_KTY = 200,
    INVALID_WRONG_KTY,
    INVALID_MISSING_ALG,    
    INVALID_WRONG_ALG,
    INVALID_MISSING_USE,
    INVALID_WRONG_USE,
    INVALID_MISSING_KID,
    INVALID_WRONG_KID,
    INVALID_SCHEMA,
    INVALID_UNKNOWN
}
