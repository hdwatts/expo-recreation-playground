import { ExpoRequest, ExpoResponse } from "expo-router/server";

export function GET(request: ExpoRequest) {
  const headers = new Headers();

  headers.set("Set-Cookie", "a=1;");
  headers.append("Set-Cookie", "b=2;");
  console.log("Headers setting", headers);
  return ExpoResponse.json(
    { hello: "world" },
    {
      headers,
    }
  );
}
