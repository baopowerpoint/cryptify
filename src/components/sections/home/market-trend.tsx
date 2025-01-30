import Filter from "@/components/search/Filter";
import Container from "@/components/shared/container";
import CryptoTable from "@/components/table/crypto-table-info";
import { HomePageFilters } from "@/constants/filters";
import { api } from "@/lib/api";
import React from "react";

const MarketTrend = async () => {
  const res = await api.coins.getAll();
  console.log(res);
  return (
    <Container className="mt-10">
      <section className="space-y-5">
        <h2 className="title-2_semibold font-jetbrains text-center">
          Xu hướng thị trường
        </h2>
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </section>
      <CryptoTable data={res.data} />
    </Container>
  );
};

export default MarketTrend;
