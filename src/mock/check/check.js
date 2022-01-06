function check(predicate, onSuccess, onFail) {
  if (predicate()) {
    return onSuccess('yes');
  }
  else {
    return onFail('no');
  }
}

module.exports = check;