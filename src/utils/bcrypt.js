import bcrypt from "bcrypt"

const saltRounds = 10;

async function handleHashPassword(plainPassword) {
  try {

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Hash yang disimpan ke database:', hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error('Gagal melakukan hash:', error);
  }
}

async function handleComparePassword(plainPassword, storedHash) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, storedHash);
    if (isMatch) {
      console.log('Login berhasil! Kata sandi cocok.');
    } else {
      console.log('Login gagal! Kata sandi salah.');
    }
    return isMatch;
  } catch (error) {
    console.error('Gagal memverifikasi kata sandi:', error);
  }
}

export { handleHashPassword, handleComparePassword }
