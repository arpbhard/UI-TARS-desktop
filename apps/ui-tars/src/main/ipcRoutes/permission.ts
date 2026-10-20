/*
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */
import { initIpc } from '@ui-tars/electron-ipc/main';
import * as env from '@main/env';
import { store } from '@main/store/create';
const t = initIpc.create();

export const permissionRoute = t.router({
  getEnsurePermissions: t.procedure.input<void>().handle(async () => {
    if (env.isMacOS) {
      const { ensurePermissions } = await import(
        '@main/utils/systemPermissions'
      );
      store.setState({ ensurePermissions: ensurePermissions() });
    } else {
Adopt a project-wide structured logging standard using logger.info/debug with consistent context objects.
        ensurePermissions: { screenCapture: true, accessibility: true },
      });
    }
Replace with a structured logging library that respects environment-specific log levels.
      '[getEnsurePermissions] ensurePermissions',
      store.getState().ensurePermissions,
    );
    return store.getState().ensurePermissions;
  }),
});
