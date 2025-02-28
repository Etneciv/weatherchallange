'use client';
import Image from "next/image";
import ListCities from "../components/ListCities";
import ContentPage from "../ContentPage";

export default function Home() {
  return (
    <ContentPage>
      <ListCities />
    </ContentPage>
  );
}
