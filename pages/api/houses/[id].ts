import fs from "fs";
import path from "path";
import { promisify } from "util";

const readFile = promisify(fs.readFile);
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req: any, res: any) {
  const id = parseInt(req?.query?.id);
  const jsonFile = path.resolve("./", "houses.json");
  const readFileData = await readFile(jsonFile);

  await delay(1000);

  const houses = JSON.parse(readFileData.toString()).houses;
  const house = houses.find((rec: { id: number; }) => rec.id === id);

  if (house) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(house);
  } else {
    res.status(404).send("house not found");
  }

  console.log(`GET /api/houses/${id} status: 200`);
};
