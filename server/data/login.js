import {} from "express-async-errors";

let loginData = [
  {
    id: "lse126",
    password: "$2b$12$dHY9fE34qX3bXQLMDDLnJ.MMbIrfRvZu1M1oUaa0C8VMA8qqk5q0e",
    name: "Lee Seong Eun",
    email: "lsevina126@gmail.com",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
  },
];

export async function findData(id) {
  return loginData.find((data) => data.id === id);
}

export async function addData(data) {
  loginData.push(data);
}
