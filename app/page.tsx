import React from "react";
import Container from "./components/Container";
import EmptyState from "./EmptyState";
import getListings from "./actions/getListings";
import ListingCard from "./components/listing/ListingCard";
import ClientOnly from "./components/ClientOnly";

export default async function Home() {
  const listings = await getListings();

  if (!listings.length) {
    return <EmptyState showReset />;
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => (
            <ListingCard key={listing.id} data={listing} />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
}
