import fs from 'fs';

import * as users from './util/users.json';

export function getUsers() {
  return users;
}
