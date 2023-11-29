const PLATFORM = 'web-admin';

const SIDE_NAV_WIDTH = 240; // Defined in pixels

const REGEX_FORMAT = {
  USERNAME: /^@?([A-Za-z]+((([.]|[-]|[_]|)[a-zA-Z0-9]+)?)|[0-9]+)$/,
  EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}$/,
};

const MAGIC_SALT = '$2a$02$0.o/O/p/E/x/S/A/L/T/';

const IMAGES_URL = `${process.env.PUBLIC_URL}/images`;


const constants = {
  SIDE_NAV_WIDTH,
  REGEX_FORMAT,
  MAGIC_SALT,
  PLATFORM,
  IMAGES_URL
};

export default constants;
