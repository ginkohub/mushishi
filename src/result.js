/**
 * Copyright (C) 2025 Ginko
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/
 *
 * This code is part of Ginko project (https://github.com/ginkohub)
 */

export class Result {
  constructor({ type, codeName, info, data }) {
    this.type = type;
    this.codeName = codeName;
    this.info = info;
    this.data = data;
  }
}
