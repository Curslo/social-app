
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithCustomToken,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDYFFeSBJd-bgoT7l8yBBeRXaaFS88ETt0",
  authDomain: "social-app-7dec4.firebaseapp.com",
  projectId: "social-app-7dec4",
  storageBucket: "social-app-7dec4.appspot.com",
  messagingSenderId: "728753604090",
  appId: "1:728753604090:web:9dc1a77bf7a8d426929043"
};
 const app = initializeApp(firebaseConfig)

export default app

// export const firebaseApp =
//   getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// export const auth = getAuth(firebaseApp);
// export const db = getFirestore(firebaseApp);
// export const storage = getStorage(firebaseApp);


// export async function getAuthenticatedAppForUser(session = null) {


//   if (typeof window !== "undefined") {
//     // client
//     console.log("client: ", firebaseApp);

//     return { app: firebaseApp, user: auth.currentUser.toJSON() };
//   }

//   const { initializeApp: initializeAdminApp, getApps: getAdminApps } = await import("firebase-admin/app");

//   const { getAuth: getAdminAuth } = await import("firebase-admin/auth");

//   const { credential } = await import("firebase-admin");

//   const ADMIN_APP_NAME = "firebase-frameworks";
//   const adminApp =
//     getAdminApps().find((it) => it.name === ADMIN_APP_NAME) ||
//     initializeAdminApp({
//       credential: credential.applicationDefault(),
//   }, ADMIN_APP_NAME);

//   const adminAuth = getAdminAuth(adminApp);
//   const noSessionReturn = { app: null, currentUser: null };


//   if (!session) {
//     // if no session cookie was passed, try to get from next/headers for app router
//     session = await getAppRouterSession();

//     if (!session) return noSessionReturn;
//   }

//   const decodedIdToken = await adminAuth.verifySessionCookie(session);

//   const app = initializeAuthenticatedApp(decodedIdToken.uid)
// 	const auth = getAuth(app)

//   // handle revoked tokens
//   const isRevoked = !(await adminAuth
//     .verifySessionCookie(session, true)
//     .catch((e) => console.error(e.message)));
//   if (isRevoked) return noSessionReturn;

//   // authenticate with custom token
//   if (auth.currentUser?.uid !== decodedIdToken.uid) {
//     // TODO(jamesdaniels) get custom claims
//     const customToken = await adminAuth
//       .createCustomToken(decodedIdToken.uid)
//       .catch((e) => console.error(e.message));

//     if (!customToken) return noSessionReturn;

//     await signInWithCustomToken(auth, customToken);
//   }
//   console.log("server: ", app);
//   return { app, currentUser: auth.currentUser };
// }

// async function getAppRouterSession() {
//   // dynamically import to prevent import errors in pages router
//   const { cookies } = await import("next/headers");

//   try {
//     return cookies().get("__session")?.value;
//   } catch (error) {
//     // cookies() throws when called from pages router
//     return undefined;
//   }
// }

// function initializeAuthenticatedApp(uid) {
//   const random = Math.random().toString(36).split(".")[1];
//   const appName = `authenticated-context:${uid}:${random}`;

//   const app = initializeApp(firebaseConfig, appName);

//   return app;
// }