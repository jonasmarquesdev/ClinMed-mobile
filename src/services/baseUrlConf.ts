import axios from "axios";
import { DB_HOST, DB_PORT } from "@env";

const url = `http://${DB_HOST}:${DB_PORT}`;

const baseUrlConf = axios.create({
  baseURL: url
});

export default baseUrlConf;