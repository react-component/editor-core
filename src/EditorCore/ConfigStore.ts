import { Map } from 'immutable';

export default class ConfigStore {
  private _store: Map;
  constructor() {
    this._store = new Map();
  }

  set(key, value) {
    this._store = this._store.set(key, value);
  }

  get(key) {
    return this._store.get(key);
  }

}
