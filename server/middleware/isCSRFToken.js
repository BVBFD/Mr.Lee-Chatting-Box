import bcrypt from 'bcrypt';
import { config } from '../config.js';

export const isCSRFToken = async (req, res, next) => {
  const csrfToken = req.cookies['CSRF_TOKEN'];

  if (!csrfToken) {
    return res.status(403).json('Fail Auth CSRF_TOKEN');
  }

  const validateCsrfToken = bcrypt.compare(csrfToken, config.csrf.plainToken);

  if (!validateCsrfToken) {
    console.warn('Invalid csrf-token!');
    return res.status(403).json('Failed CSRF check');
  } else {
    next();
  }
};
