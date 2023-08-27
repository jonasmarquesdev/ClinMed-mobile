import axios from "axios";
import { DB_HOST, DB_PORT } from "@env";

const HOST = DB_HOST;
const PORT = DB_PORT;
const baseUrlConf = `http://${HOST}:${PORT}`;

const api = axios.create({
  baseURL: baseUrlConf
});

export default api;