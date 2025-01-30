import BlurImage from "@/components/shared/blur-image";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <Container className="my-12 space-y-4">
      <h1 className="text-4xl font-jetbrains font-bold">
        Mua & bán tiền mã hoá trong vài phút
      </h1>
      <p className="normal_medium">
        Giao dịch Bitcoin, Ethereum, USDT, và các đồng altcoin hàng đầu trên sàn
        giao dịch tài sản tiền điện tử huyền thoại.
      </p>
      <Button className="rounded-full bg-linear-to-r from-primary-1 to-primary-1/80 cursor-pointer normal_medium">
        Bắt đầu ngay
      </Button>
      <div>
        <BlurImage src="/card.png" alt="" width={400} height={400} />
      </div>
    </Container>
  );
};

export default Hero;
