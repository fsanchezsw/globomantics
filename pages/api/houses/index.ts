import fs from "fs";
import path from "path";
import { promisify } from "util";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req: any, res: any) {
  const method = req?.method;
  const jsonFile = path.resolve("./", "houses.json");
  const readFileData = await readFile(jsonFile);
  const houses = JSON.parse(readFileData.toString()).houses;

  await delay(1000);

  switch (method) {
    case "GET":
      try {
        if (!houses) {
          res.status(404).send("Error: Request failed with status code 404");
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).send(JSON.stringify(houses, null, 2));
          
          console.log("GET /api/houses  status: 200");
        }
      } catch (e) {
        console.log("/api/houses error:", e);
      }
      break;

    case "POST":
      try {
        const recordFromBody = JSON.parse(req?.body);
        recordFromBody.id = Math.max(...houses.map((h: { id: number; }) => h.id)) + 1;

        const newHousesArray = [...houses, recordFromBody];

        console.log({ recordFromBody, newHousesArray })
        
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              houses: newHousesArray,
            },
            null,
            2
          )
        );
        res.status(200).json(recordFromBody);
        
        console.log(`POST /api/houses status: 200`);
      } catch (e) {
        console.log("/api/houses POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
