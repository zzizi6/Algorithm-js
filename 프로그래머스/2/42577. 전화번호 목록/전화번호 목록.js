function solution(phone_book) {
  var sorted_phone_book = phone_book.sort();

  for (var i = 0; i < sorted_phone_book.length - 1; i++) {
    if (sorted_phone_book[i + 1].startsWith(sorted_phone_book[i])) {
      return false;
    }
  }

  return true;
}