import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllRestaurantVenues = () => {
  return prisma.restaurant_venues.findMany({
    where: {
      active: true
    }
  });
};

export const getByIdRestaurantVenues = (id: string) => {
  return prisma.restaurant_venues.findMany({
    where: {
      id_restaurant_venue: id,
      active: true
    },
  });
};

export const createRestaurantVenues = (input: any) => {
  const {
    name_venue,
    address,
    city,
    venue_photo,
    phone_number,
    open_hour,
    close_hour,
    restaurantsId_restaurant,
  } = input;
  return prisma.restaurant_venues.create({
    data: {
      name_venue,
      address,
      city,
      venue_photo,
      phone_number,
      open_hour,
      close_hour,
      restaurants: {
        connect: {
          id_restaurant:restaurantsId_restaurant
        }
      },
    },
  });
};

export const updateByIdRestaurantVenues = (id: string, input: any) => {
  const {
    name_venue,
    address,
    city,
    venue_photo,
    phone_number,
    open_hour,
    close_hour,
    restaurantsId_restaurant,
  } = input;
  return prisma.restaurant_venues.update({
    where: {
      id_restaurant_venue: id,
    },
    data: {
      name_venue,
      address,
      city,
      venue_photo,
      phone_number,
      open_hour,
      close_hour,
      restaurantsId_restaurant,
    },
  });
};

export const deleteRestaurantVenues = (id: string) => {
  return prisma.restaurant_venues.update({
    where: {
      id_restaurant_venue: id,
    },
    data: {
      active: false
    }
  });
};
