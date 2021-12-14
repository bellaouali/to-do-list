export default function checkElementExist(id) {
    if (document.getElementById(id) !== null) {
      return true;
    } else {
      return false;
    }
  }