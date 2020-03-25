import bcrypt from 'bcryptjs';

const hashPassword = async (password: string): Promise<string> => {
  if (!password) return '';
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

const BcryptUtil = {
  hashPassword,
};

export default BcryptUtil;
