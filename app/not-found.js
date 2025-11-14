"use client";
import FuzzyText from "@/components/FuzzyText";

export default function NotFoundPage() {
  const hoverIntensity = 1.0;
  const enableHover = true;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
        fontSize="clamp(4rem, 20vw, 10rem)"
        color="#FF79C6"
      >
        404
        Not Found
      </FuzzyText>
    </div>
  );
}
