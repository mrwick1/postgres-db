import { Client } from "pg";

export async function getClient() {
  const URL =
    "postgres://htvdpqfl:PXo1D_69ZVOVWZKi35ltIR1XZ92mCLq2@isabelle.db.elephantsql.com/htvdpqfl";
  const client = new Client(URL);
  await client.connect();
  return client;
}
