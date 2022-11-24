import { HttpException, HttpStatus, Body } from '@nestjs/common';
import { JsonException } from './exception.dto';


export class Causes {
  public static INTERNAL_ERROR = new HttpException(
    ['Server internal error'],
    HttpStatus.INTERNAL_SERVER_ERROR,
  );

  public static JWT_EXPIRED = new JsonException(
    'jwt expired',
    HttpStatus.UNAUTHORIZED,
    'JWT_EXPIRED'
  );
  
  public static EMAIL_OR_PASSWORD_INVALID = new HttpException(
    ['Email or Password is invalid'],
    HttpStatus.UNAUTHORIZED,
  );


  public static EMAIL_INVALID = new HttpException(
    ['Please enter a valid email address that has been previously registered with Verdant'],
    HttpStatus.UNAUTHORIZED,
  );
  public static PASSWORD_INVALID = new HttpException(
    ['Wrong password. Try again or click ""Forgot Password"" to reset it. Please enter the password registered with Verdant'],
    HttpStatus.UNAUTHORIZED,
  );

  public static DID_NOT_CONFIG_MASTER_WALLET = new JsonException(
    'Did not config master wallet in server',
    HttpStatus.BAD_REQUEST,
  'BAD_REQUEST'  );


  public static USER_IN_BLACKLIST = new HttpException(
    ['Your account has been locked. Please contact email support.verdant@gmail.com for inquiries!'],
    HttpStatus.BAD_REQUEST,
  );
  public static ADMIN_IS_NOT_ACTIVE = new HttpException(
    ['Your account has been locked. Please contact email support.verdant@gmail.com for inquiries!'],
    HttpStatus.BAD_REQUEST,
  );
  public static TWOFA_INVALID = new HttpException(
    ['TwoFactorAuthentication code is invalid'],
    HttpStatus.BAD_REQUEST,
  );
  public static EMAIL_CODE_INVALID = new HttpException(
    ['Email code is invalid'],
    HttpStatus.BAD_REQUEST,
  );

  public static EXPRIRE_TIME_TOKEN = new HttpException(
    ['EXPRIRE_TIME_TOKEN '],
    HttpStatus.BAD_REQUEST,
  );

  public static CODE_INVALID = new HttpException(
    ['OTP is invalid. Please enter correct password'],
    HttpStatus.BAD_REQUEST,
  );


  public static USER_NOT_ACTIVE = new HttpException(
    ['Your account is not active'],
    HttpStatus.BAD_REQUEST,
  );

  public static USER_IS_ALREADY_KYC = new HttpException(
    ['User is already KYC'],
    HttpStatus.BAD_REQUEST,
  );

  public static GEN_URL_KYC_ERROR = new HttpException(
    ['Error when generate url KYC'],
    HttpStatus.BAD_REQUEST,
  );

  public static ACTIVE_WALLET = new HttpException(
    ['Wallet is active'],
    HttpStatus.BAD_REQUEST,
  );

  public static VERDANT_WALLET = new HttpException(
    ['Verdant wallet is not removed'],
    HttpStatus.BAD_REQUEST,
  );
  public static DISCOUNT_CODE_INVALID = new HttpException(
    ['Promo code doesn’t exist'],
    HttpStatus.BAD_REQUEST,
  );

  public static DISCOUNT_CODE_NOT_SUPPORT = new HttpException(
    [`This promo code can't be used for this NFT`],
    HttpStatus.BAD_REQUEST,
  );
  
  public static DISCOUNT_CODE_EXPIRED = new HttpException(
    [`Sorry, the promo is already expired `],
    HttpStatus.BAD_REQUEST,
  );

  public static DISCOUNT_CODE_SOLD_OUT = new HttpException(
    [`Sorry, the promo is already sold out`],
    HttpStatus.BAD_REQUEST,
  );  

  public static DISCOUNT_CODE_MIN_AMOUNT = new HttpException(
    [`You haven't reached the minimum order amount to use this promo code`],
    HttpStatus.BAD_REQUEST,
  );

  public static DISCOUNT_CODE_NOT_APPLIED = new HttpException(
    [`This promo code can't be used right now. Check T&C for the specific time and day.`],
    HttpStatus.BAD_REQUEST,
  );
  

  public static DUPLICATED_EMAIL_OR_USERNAME = new HttpException(
    ['Email or username or Wallet was registered'],
    HttpStatus.CONFLICT,
  );

  public static DUPLICATED_EMAIL = new HttpException(
    ['Email was registered'],
    HttpStatus.CONFLICT,
  );

  public static DUPLICATED_COMMISSION = new HttpException(
    ['Commission already exist'],
    HttpStatus.CONFLICT,
  );
  public static DUPLICATED_ACCOUNT = new HttpException(
    ['Email or username was registered'],
    HttpStatus.CONFLICT,
  );

  public static DUPLICATED_WALLET = new HttpException(
    ['One external wallet at a time'],
    HttpStatus.CONFLICT,
  );

  public static DUPLICATED_NAME_NFT = new HttpException(
    ['NFT name already exist'],
    HttpStatus.CONFLICT,
  );


  public static INVALID_SIGNATURE_WALLET = new HttpException(
    ['Signature is not valid'],
    HttpStatus.CONFLICT,
  );
  public static NOT_ACCESS_CREATE_USER = new HttpException(
    ['You cant access create new user'],
    HttpStatus.CONFLICT,
  );
  public static USER_NOT_ACCESS = new HttpException(
    ['You can not access'],
    HttpStatus.UNAUTHORIZED,
  );


  public static IS_NOT_MASTER_VENDOR = new HttpException(
    ['You are not the master vendor so you cannot perform this action'],
    HttpStatus.CONFLICT,
  );


  public static VALIDATE_VALUE = new HttpException(
    ['Error validate'],
    HttpStatus.CONFLICT,
  );

    public static EARLIEST_START_TIME = new HttpException(
      ['The earliest start date is tomorrow.'],
      HttpStatus.CONFLICT,
    )

    public static INVALID_END_TIME = new HttpException(
      ['End time can not lower than start time'],
      HttpStatus.CONFLICT
    )

  public static USER_NOT_FIX = new HttpException(
    ['You can not fix'],
    HttpStatus.CONFLICT,
  );

  public static USER_NOT_UPDATE = new HttpException(
    ['You can not update status new back'],
    HttpStatus.CONFLICT,
  );

  public static COLLECTION_ID_INVALID = new HttpException(
    ['CollectionId does not exist'],
    HttpStatus.BAD_REQUEST,
  );

  public static IPAGINATION_OPTIONS_INVALID = new HttpException(
    ['Page and limit have to greater than 0.'],
    HttpStatus.BAD_REQUEST,
  );

  public static ERROR_IPFS = new HttpException(
    ['Ipfs Error due to running out of space or key.'],
    HttpStatus.BAD_REQUEST,
  );

  public static ERROR_S3 = new HttpException(
    ['Aws s3 Error due to running out of space or key.'],
    HttpStatus.BAD_REQUEST,
  );

  public static QUERY_OPTIONS_INVALID = new HttpException(
    ['Query options is not valid'],
    HttpStatus.BAD_REQUEST,
  );
  public static CURRENCY_INVALID = new HttpException(
    ['Currency is not valid in system'],
    HttpStatus.BAD_REQUEST,
  );

  public static DATA_INVALID = new HttpException(
    ['Data is not valid in system'],
    HttpStatus.BAD_REQUEST,
  );

  public static CATEGORY_EXIST = new HttpException(
    ['Category is exist in system'],
    HttpStatus.BAD_REQUEST,
  );

  public static BRAND_EXIST = new HttpException(
    ['Brand is exist in system'],
    HttpStatus.BAD_REQUEST,
  );
  
  public static NOT_DELETE = new HttpException(
    ['You need to burn all the NFTs to remove'],
    HttpStatus.BAD_REQUEST,
  );

  public static PASSWORD_IS_FALSE = new HttpException(
    ["The password you entered didn't match our record"],
    HttpStatus.BAD_REQUEST,
  );

  public static NO_CHANGE_PASS = new HttpException(
    ["This account can't change password by is registered with the account Metamask wallet"],
    HttpStatus.BAD_REQUEST,
  );

  public static NO_USER_BY_WALLET = new HttpException(
    ["Can't find account by wallet"],
    HttpStatus.BAD_REQUEST,
  );


  public static NO_USER_BY_EMAIL = new HttpException(
    ["Can't find account by email"],
    HttpStatus.BAD_REQUEST,
  );

  public static USER_IS_BLACKLIST = new HttpException(
    ["This account has been added to the blacklist before"],
    HttpStatus.BAD_REQUEST,
  );

  public static DATA_DUPLICATE = new HttpException(
    ['Data cannot be the same as the old Data'],
    HttpStatus.BAD_REQUEST,
  );

  public static PROMO_NAME_DUPLICATE = new HttpException(
    ['Promo name is exist in system'],
    HttpStatus.BAD_REQUEST,
  );

  public static PROMO_CODE_DUPLICATE = new HttpException(
    ['Promo code is exist in system'],
    HttpStatus.BAD_REQUEST,
  );
  public static CODE_DUPLICATE = new HttpException(
    ['This code is already available'],
    HttpStatus.BAD_REQUEST
  )

  public static FILE_SIZE_OVER = new HttpException(
    ['Upload file size exceeds the allowed limit'],
    HttpStatus.BAD_REQUEST,
  );

  public static FILE_TYPE_INVALID = new HttpException(
    ['File type upload invalid'],
    HttpStatus.BAD_REQUEST,
  );

  public static PHONE_INVALID = new HttpException(
    ['Phone is not valid'],
    HttpStatus.BAD_REQUEST,
  );

  public static DUPLICATE_PASSWORD = new HttpException(
    ['The new password cannot be the same as the old password'],
    HttpStatus.BAD_REQUEST,
  );

  public static USER_ERROR = new HttpException(
    ["User does not exist or User has been't activated"],
    HttpStatus.BAD_REQUEST,
  );

  public static CURRENCY_INIT_FAIL = new HttpException(
    ['Currency init process was failed'],
    HttpStatus.BAD_REQUEST,
  );
  /**
   * address
   */
  public static ADDRESS_NOT_FOUND = new HttpException('Address not found', HttpStatus.NOT_FOUND);
  public static ADDRESS_NOT_BELONG_TO_WALLET = new HttpException(
    'Address does not belong to wallet',
    HttpStatus.BAD_REQUEST,
  );
  public static CREATE_ADDRESS_FAILED = new HttpException(
    'Create address failed',
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
  public static ENCRYPT_PRIVATE_KEY_ERROR = new HttpException(
    'Encrypted private key invalid',
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
  public static ADDRESS_INSIDE_SYSTEM = new HttpException(
    'Address is inside the system',
    HttpStatus.BAD_REQUEST,
  );
  public static ADDRESS_INVALID = new HttpException('Address invalid', HttpStatus.BAD_REQUEST);
  public static ADDRESS_NEED_MEMO = new HttpException(
    'Memo is required for the address',
    HttpStatus.BAD_REQUEST,
  );

  /**
   * wallet
   */
  public static WALLET_NOT_FOUND = new HttpException('Wallet not found', HttpStatus.NOT_FOUND);
  public static MISMATCH_WALLET_COIN_TYPE = new HttpException(
    'msg_coin_type_incorrect',
    HttpStatus.BAD_REQUEST,
  );
  public static WALLET_WITH_CURRENCY_EXISTED = new HttpException(
    'Wallet with currency existed',
    HttpStatus.BAD_REQUEST,
  );
  public static WALLET_WITH_CURRENCY_NOT_CREATED = new HttpException(
    'Wallet with currency was not created',
    HttpStatus.BAD_REQUEST,
  );
  /**
   * hot wallet
   */
  public static HOT_WALLET_NOT_FOUND = new HttpException(
    'Hot wallet not found',
    HttpStatus.NOT_FOUND,
  );
  public static HOT_WALLET_EXISTED = new HttpException(
    'Hot wallet of user existed',
    HttpStatus.BAD_REQUEST,
  );
  public static HOT_WALLET_TYPE_INVALID = new HttpException(
    'Hot wallet type is not invalid',
    HttpStatus.BAD_REQUEST,
  );
  public static LOWER_THRESHOLD_MUST_BE_GREATER_THAN_0 = new HttpException(
    'Lower threshold must be greater than 0',
    HttpStatus.BAD_REQUEST,
  );
  public static LOWER_THRESHOLD_MUST_BE_LESS_THAN_UPPER_MIDDLE = new HttpException(
    'Lower threshold must be less than upper threshold and middle threshold',
    HttpStatus.BAD_REQUEST,
  );
  public static MIDDLE_THRESHOLD_MUST_BE_LESS_THAN_UPPER = new HttpException(
    'Middle threshold must be less than upper threshold',
    HttpStatus.BAD_REQUEST,
  );
  /**
   * kms
   **/
  public static KMS_DATA_KEY_NOT_FOUND = new HttpException(
    'msg_kms_data_key_not_found',
    HttpStatus.NOT_FOUND,
  );
  public static KMS_CMK_NOT_FOUND = new HttpException(
    'msg_kms_cmk_not_found',
    HttpStatus.NOT_FOUND,
  );
  public static KMS_CMK_INVALID = new HttpException(
    'msg_kms_cmk_invalid',
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
  public static ONLY_SUPPORT_STRING = new HttpException(
    'msg_only_support_encrypt_string',
    HttpStatus.BAD_REQUEST,
  );

  /**
   * blockchain
   */
  public static GET_BALANCE_FAIL = new HttpException(
    'Get balance fail',
    HttpStatus.INTERNAL_SERVER_ERROR,
  );

  /**
   * deposit
   */
  public static DEPOSIT_AMOUNT_GREATER_THAN_BALANCE = new HttpException(
    'Deposit amount is greater than address balance',
    HttpStatus.BAD_REQUEST,
  );
  public static DEPOSIT_NOT_FOUND = new HttpException('Deposit not found', HttpStatus.NOT_FOUND);
  public static LOCAL_TX_NOT_INSERTED_AFTER_COLLECTING = new HttpException(
    'Local tx not inserted after collecting',
    HttpStatus.INTERNAL_SERVER_ERROR,
  );

  /**
   * withdrawals
   */
  public static WITHDRAW_FROM_INTERNAL_ADDRESS = new HttpException(
    'Cannot withdraw to an address inside the system',
    HttpStatus.BAD_REQUEST,
  );
  public static WALLET_BALANCE_NOT_FOUND_COIN = new HttpException(
    'Wallet balance not found, hot wallet need platform coin to send token.',
    HttpStatus.NOT_FOUND,
  );
  public static WITHDRAWAL_AMOUNT_MUST_GREATER_THAN_ZERO = new HttpException(
    'Withdrawal amount must greater than 0',
    HttpStatus.BAD_REQUEST,
  );

  /**
   * webhook
   **/
  public static WEBHOOK_NOT_FOUND = new HttpException('Webhook not found.', HttpStatus.NOT_FOUND);
  public static WEBHOOK_ALREADY_EXIST = new HttpException(
    'Webhook already exist.',
    HttpStatus.BAD_REQUEST,
  );
  public static CURRENCY_NOT_SUPPORT = new HttpException(
    ['Currency not support'],
    HttpStatus.BAD_REQUEST,
  );
  public static METHOD_NOT_SUPPORT = new HttpException(
    ['Method not support'],
    HttpStatus.BAD_REQUEST,
  );


  public static ERROR_SEND_TRANSACTION = (errorMessage) => (
    new JsonException(`ERROR_SEND_TRANSACTION:  ${errorMessage} `,
        HttpStatus.BAD_REQUEST,
        'ERROR_SEND_TRANSACTION', {
            value_1: errorMessage
        })
  );

  public static PROMOTYPE_EMPTY = new HttpException(
    ['promoType is not empty'],
    HttpStatus.BAD_REQUEST,
  );

  public static PROMONAME_EMPTY = new HttpException(
    ['Name is not empty'],
    HttpStatus.BAD_REQUEST,
  );
  

  public static PRICE_EMPTY = new HttpException(
    ['Type must be a number'],
    HttpStatus.BAD_REQUEST,
  );
  

   
}
