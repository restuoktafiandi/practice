// import { db } from "../config/db"
// import { handleComparePassword, handleHashPassword } from "../utils/bcrypt"; 

// export class EmployeeService {
//    static async getEmployee() {
//         try {
//             const [rows] = await db.query('SELECT id, username, email FROM users');
//             return rows;
//         } catch (error) {
//             throw new Error('Gagal mengambil data user: ' + error.message);
//         }
//     }

//     static async addEmployee(id, name, email, password) {
//         try {
//             const hashedPassword = handleHashPassword(password)

//             const [result] = await db.query(
//                 'INSERT INTO employee (id, name, email, password) VALUES (?, ?, ?)',
//                 [id, name, email, hashedPassword]
//             );
//             return { id, name, email, password };
//         } catch (error) {
//         throw new Error('Gagal membuat user baru: ' + error.message);
//         }
//     }
//     }

//     static async addEmployee(req, res) {
//     try {
//     const [result] = await pool.execute(
//       'INSERT INTO users (name, email) VALUES (?, ?)',
//       [name, email]
//     );
//     res.status(201).json({ id: result.insertId, name, email });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Gagal menyimpan data' });
//   }
// }
