export default function makeId() {
  let ID = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let i = 0; i < 16; i += 1) {
    ID += characters.charAt(Math.floor(Math.random() * 36));
  }
  return ID;
}