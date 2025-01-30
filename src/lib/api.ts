import { fetchHandler } from "./handlers/fetch";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export const api = {
  coins: {
    getAll: () =>
      fetchHandler(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=price&convert=VND`,
        {
          method: "GET",
          headers: {
            "X-CMC_PRO_API_KEY": "3f6a2bf1-c9f1-4284-bd1e-8dc5c12ebbfa",
            "Accept-Encoding": "deflate, gzip",
            "Content-Type": "application/json",
          },
        }
      ),
  },
};
