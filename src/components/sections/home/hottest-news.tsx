import NewsCard from "@/components/card/news-card";
import LocalFilter from "@/components/search/local-filter";
import Container from "@/components/shared/container";
import React from "react";

const HottestNews = () => {
  return (
    <Container>
      <section>
        <h2 className="title-2_semibold font-jetbrains text-center">Tin tức</h2>
        <LocalFilter />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <NewsCard
            title="Leveraged tokens now available"
            description="Good things come in 3s. Get 3x Leveraged tokens now."
            image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <NewsCard
            title="New Crypto Wallet Launched"
            description="Your secure way to manage digital assets. Experience seamless transactions."
            image="https://images.unsplash.com/photo-1619159250042-720910343689?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          />
          <NewsCard
            title="New Crypto Wallet Launched"
            description="Your secure way to manage digital assets. Experience seamless transactions."
            image="https://images.unsplash.com/photo-1613442301022-a16cb7af9dca?q=80&w=3725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>
    </Container>
  );
};

export default HottestNews;
