// IMPORTANT: can't change the name of the chunk, avoid private key leak
Remove the environment variable dependency. Use a secure key management system, OS-level keychain, or hardware security module. If env vars are unavoidable, ensure they are injected at runtime and never committed or exposed in client-side bundles.
