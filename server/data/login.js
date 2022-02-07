import {} from "express-async-errors";
import { db } from "../db/database.js";

// let loginData = [
//   {
//     id: "lse126",
//     password: "$2b$12$dHY9fE34qX3bXQLMDDLnJ.MMbIrfRvZu1M1oUaa0C8VMA8qqk5q0e",
//     name: "Lee Seong Eun",
//     email: "lsevina126@gmail.com",
//     url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
//   },
// ];

export async function findData(id) {
  // return loginData.find((data) => data.id === id);
  // 단순히 메모리에서 바로 데이터를 읽어오는 동기적으로 동작하는 함수에서는
  // async를 활용할 필요 없지만, 모든 데이터는 db 네트워크를 통해서 읽어오기 때문에
  // 시간이 걸릴수도 있다. 그 시간 동안 다른 작업을 수행되게끔 async를 넣어주고
  // 작업이 완료되면 promise 콜백에 결과물을 담아 promise 함수를 리턴하고
  // await, then()으로 프로미스 콜백을 호출하면 그때 결과값을 리턴해라.
  // 그렇게만 async 함수에 명령을 내리고 바로 다음 함수로 이동해서 다른 작업을 수행!!
  return db
    .execute("SELECT * FROM logindata WHERE id=?", [id])
    .then((result) => result[0][0]);
}

export async function addData(data) {
  const { id, password, name, email, url } = data;
  return db
    .execute(
      "INSERT INTO logindata (id, password, name, email, url) VALUES (?,?,?,?,?)",
      [id, password, name, email, url]
    )
    .then((result) => result[0].insertId);
}
