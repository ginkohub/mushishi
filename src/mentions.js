/**
 * Copyright (C) 2025 Ginko
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/
 *
 * This code is part of Ginko project (https://github.com/ginkohub)
 */

import { Result } from "./result.js";

const rest = new Result({
  type: "too-many-mention",
  message: `Too many mentions`,
});

export function mentions(update) {
  if (update) {
    if (update.mentions) {
      if (Array.isArray(update.mentions) && update.mentions?.length > 1025) {
        rest.data = update.mentions;
        return rest
      }
    }

    if (Array.isArray(update)) {
      for (const up of update) {
        for (const key of up) {
          if (typeof up[key] === 'object') {
            if (up[key].contextInfo) {
              if (up[key].contextInfo?.mentionedJid) {
                if (Array.isArray(up[key].contextInfo.mentionedJid) && up[key].contextInfo.mentionedJid.length > 1025) {
                  rest.data = up[key].contextInfo.mentionedJid;
                  return rest;
                }
              }
            }
          }
        }
      }
    }
  }

  return;
}
