/**
 * Copyright (C) 2025 Ginko
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/
 *
 * This code is part of Ginko project (https://github.com/ginkohub)
 */

import { Result } from "./result";
const codeName = "too-many-mention";

export function mentions(update) {
  if (update) {
    if (update.mentions) {
      if (Array.isArray(update.mentions) && update.mentions?.length > 1025) {
        return new Result({
          type: codeName,
          message: `Too many mentions (${update.mentions.length} > 1025)`,
          data: update.mentions
        })
      }
    }
  }

  return;
}
