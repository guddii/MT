import process from "node:process";
import { Agent } from "../../models/agent.ts";
import { PROXY } from "../apps/proxy";

export const DPC = new Agent({
  webId: process.env.DPC_WEB_ID || "http://localhost:4000/dpc/profile/card#me",
  storage: process.env.DPC_STORAGE || "http://localhost:4000/dpc",
  clientId: process.env.DPC_ID || undefined,
  clientSecret: process.env.DPC_SECRET || undefined,
  provider: PROXY,
});