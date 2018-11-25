// Code your solution in this file
function findMatching (collection, name) {
  for (const driver of collection) {
    if (driver === name) {
      return [driver];
    }
  }
}