import { loadRemoteEntry } from "@angular-architects/module-federation";

Promise.all([
  loadRemoteEntry("http://localhost:4201/profile.js", "profile"),
  loadRemoteEntry("http://localhost:4202/remoteEntry.js", "profile2"),
])
  .catch((err) => console.error("Error loading remote entries", err))
  .then(() => import("./bootstrap"))
  .catch((err) => console.error(err));
