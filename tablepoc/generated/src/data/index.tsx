export type dataType = {
  id: number;
  fullName: string;
  age: number;
  city: string;
}[];

export const tableData: dataType = [
  { id: 1, fullName: "Noor Khan", age: 25, city: "Patna" },
  { id: 2, fullName: "Rapsan Jani", age: 26, city: "Noida" },
  { id: 3, fullName: "Monika Singh", age: 18, city: "New Delhi" },
  { id: 4, fullName: "Sunil Kumar", age: 22, city: "Jaipur" },
  { id: 5, fullName: "Kajol Kumari", age: 21, city: "Chennai" },
];

export const columnHeaders: any = [
  {
    id: 0,
    idno: "ID",
  },
  {
    id: 1,
    fullName: "Full Name",
  },
  {
    id: 2,
    age: "Age",
  },
  {
    id: 3,
    city: "City",
  },
  {
    id: 4,
    options: "Options",
  },
];
