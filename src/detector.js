/**
 * Copyright (C) 2025 Ginko
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/
 *
 * This code is part of Ginko project (https://github.com/ginkohub)
 */

/**
 * Detector class
 */
export class Detector {
  constructor(...methods) {
    this.methods = methods;
  }

  /**
  * Detects the given event
  * @param {any} update
  */
  detect(update) {
    for (let i = 0; i < this.methods.length; i++) {
      const method = this.methods[i];
      if (!method || typeof method !== 'function') continue;
      const result = method(update);
      if (result) {
        return true;
      }
    }
  }
}
