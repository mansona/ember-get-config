// Polyfill only as much as we need (don't need thisArg)
export function Array_find(callback) {
  for (var i = 0, entry = this[i]; i < this.length; entry = this[++i]) {
    if (callback(entry, i, this)) {
      return entry;
    }
  }
}

export default (Array.prototype.find || Array_find);
