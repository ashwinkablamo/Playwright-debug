import { expect, test, APIRequestContext } from "@playwright/test";

test("ping google.com", async ({ request }) => {
  const response = await request.get("https://www.kablamo.com.au");
  expect(response.ok()).toBeTruthy();
});
