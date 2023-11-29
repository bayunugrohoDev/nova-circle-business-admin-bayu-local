import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

import constants from '../config/constants';

const encode = (password:string) => {
  return sha256(`${constants.MAGIC_SALT}${password}`).toString(Base64);
};

const crypto = {
  encode,
};

export default crypto;
