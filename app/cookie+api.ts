import { ExpoRequest, ExpoResponse } from "expo-router/server";
import { FINALCIRCLE } from "../components/circular/backend/circle1";

export function GET(request: ExpoRequest) {
  const headers = new Headers();
  headers.set("Set-Cookie", "a=1;");
  headers.append("Set-Cookie", "b=2;");
  console.log("Headers setting", headers);
  console.log("Circular example", FINALCIRCLE);
  return ExpoResponse.json(
    { hello: "world" },
    {
      headers,
    }
  );
}
