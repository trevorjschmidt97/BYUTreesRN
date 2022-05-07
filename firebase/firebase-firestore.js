import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";
import { firestore } from "./firebase-config";

export const getTrees = async () => {
  const q = query(collection(firestore, "Trees"), orderBy("CommonName"));
  const res = await getDocs(q);
  return res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
