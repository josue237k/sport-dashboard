
export const Athletes = [
  { name: "Micheal Jordan", id: 1, gender: "Male", age: 20, levelID: 3, specialityID: 1, enrollSports: [1, 2] },
  { name: "Cristiano Ronaldo", id: 2, gender: "Male", age: 21, levelID: 3, specialityID: 3, enrollSports: [1] },
  { name: "Usain Bolt", id: 3, gender: "Male", age: 20, levelID: 3, specialityID: 2, enrollSports: [1, 2] },
  { name: "Leonel Messi", id: 4, gender: "Male", age: 20, levelID: 3, specialityID: 5, enrollSports: [1, 4] },
  { name: "Micheal Phelps", id: 5, gender: "Male", age: 20, levelID: 3, specialityID: 4, enrollSports: [1, 3] }
];

export const Levels = [
  { levelID: 1, name: "L1", description: "Level 1" },
  { levelID: 2, name: "L2", description: "Level 2" },
  { levelID: 3, name: "L3", description: "Level 3" }
];

export const Specialities = [
  { specialityID: 1, name: "WDI", description: "Web Digital and IT" },
  { specialityID: 2, name: "RH", description: "Human Resource" },
  { specialityID: 3, name: "ACC", description: "Accounting" },
  { specialityID: 4, name: "BAF", description: "Banking And Finance" },
  { specialityID: 5, name: "LAT", description: "Logistics And Transport" }
];

export const Sports = [
  { id: 1, name: "Football", description: "Football", individual: false },
  { id: 2, name: "Basketball", description: "Basketball", individual: false },
  { id: 3, name: "Tennis", description: "Tennis", individual: true },
  { id: 4, name: "Swimming", description: "Swimming", individual: true }
];

export const Users = [
  { id: 1, name: "John Doe", role: "Administration", language: "English", password: "password123", email: "tchoupajosue@gmail.com", defaultTheme: "light" },
  { id: 2, name: "Jane Smith", role: "student", language: "French", password: "password423", email: "jane@university.edu", defaultTheme: "dark" },
  { id: 3, name: "Alice John", role: "coach", language: "English", password: "password789", email: "alice@university.edu", defaultTheme: "light" },
  { id: 4, name: "Christophe Alex", role: "student", language: "French", password: "passwo23", email: "chris@university.edu", defaultTheme: "dark" }
];
