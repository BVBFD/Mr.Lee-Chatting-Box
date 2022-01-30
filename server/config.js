import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
  const val = process.env[key] || defaultValue;
  if (val == null) {
    throw new Error("value is undefined");
  }
  return val;
}

export const config = {
  bcrypt: {
    saltRound: parseInt(required("BCRYPT_SALT_ROUND", 12)),
  },
  jwt: {
    jwtSecret: required("JWT_SECRET"),
    jwtExpires: parseInt(required("JWT_EXPIRES", 172800)),
  },
  host: {
    localHost: parseInt(required("LOCAL_HOST", 4000)),
  },
};
