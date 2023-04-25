import React from "react";
import Container from "./components/Container";
import EmptyState from "./EmptyState";
import getListings from "./actions/getListings";
import ListingCard from "./components/listing/ListingCard";
import ClientOnly from "./components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";

const Home = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (!listings.length) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
