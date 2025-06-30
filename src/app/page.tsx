import Button from "@/components/button";
import SpecialDealCard from "@/components/specialDealCard";
import SpecialMenuCard from "@/components/specialMenuCard";
import Link from "next/link";
import { Clock, MapPinIcon, Phone, UserRound, Utensils } from "lucide-react";

export const specialDealItems = [
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    rating: 4.8,
    badgeText: "Chef's Special",
    title: "Butter Chicken",
    price: 12.99,
    oldPrice: 15.99,
    calories: 450,
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Paneer Tikka",
    rating: 4.6,
    badgeText: "Vegetarian",
    title: "Paneer Tikka",
    price: 9.99,
    oldPrice: 11.49,
    calories: 380,
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Hyderabadi Biryani",
    rating: 4.9,
    title: "Hyderabadi Biryani",
    price: 14.5,
    calories: 520,
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Gulab Jamun",
    rating: 4.7,
    badgeText: "Dessert",
    title: "Gulab Jamun",
    price: 4.25,
    oldPrice: 5.0,
  },
];

export const specialMenuItems = [
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    title: "Butter Chicken",
    type: "Staters",
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    title: "Butter Chicken",
    type: "Staters",
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    title: "Butter Chicken",
    type: "Staters",
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    title: "Butter Chicken",
    type: "Staters",
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    title: "Butter Chicken",
    type: "Staters",
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    title: "Butter Chicken",
    type: "Staters",
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    title: "Butter Chicken",
    type: "Staters",
  },
  {
    imageSrc: "/images/specialdeal.jpeg",
    altText: "Butter Chicken",
    title: "Butter Chicken",
    type: "Staters",
  },
];

export default function Home() {
  return (
    <div>
      {/* hero */}
      <section className="relative w-full h-screen -mt-[70px] px-5 lg:px-[20%] flex flex-col items-center justify-center z-20">
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-[url(/images/hero.webp)] bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

        <div className="relative z-20 flex flex-col gap-4 items-center text-white text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold font-serif">
            Welcome to Indian Crown
          </h2>
          <p className="w-[90%] lg:w-[80%] text-xl text-white/80">
            Experience the authentic flavors of India with our traditional
            recipes made with fresh ingredients and aromatic spices
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button>Order Now</Button>
            <Button variant="white">View Menu</Button>
          </div>
        </div>
      </section>
      {/* Today's Special Deals*/}
      <section className="relative w-full overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-[url(/images/deal.webp)] bg-fixed bg-center" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10" />
        <div className="custom-container w-full relative z-20">
          <div className="mb-16 text-center">
            <h2 className="text-4xl text-white mb-5 font-serif">
              Today's Special Deals
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
            {specialDealItems.map((item, index) => (
              <SpecialDealCard
                key={index}
                imageSrc={item.imageSrc}
                altText={item.altText}
                rating={item.rating}
                badgeText={item.badgeText}
                title={item.title}
                price={item.price}
                oldPrice={item.oldPrice}
                calories={item.calories}
              />
            ))}
          </div>
          <Button variant="secondary">View All Deals</Button>
        </div>
      </section>
      {/* Our Special Menu */}
      <section className="custom-container w-full relative z-20">
        <div className="mb-16 lg:flex justify-between items-center text-center">
          <h2 className="text-3xl lg:text-4xl text-amber-950 font-bold font-serif mb-2 lg:mb-0">
            Today's Special Menu
          </h2>
          {/* <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
           */}
          <Link href={""} className="text-red-500 font-light">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {specialMenuItems.map((item, index) => (
            <SpecialMenuCard
              key={index}
              imageSrc={item.imageSrc}
              altText={item.altText}
              title={item.title}
              type={item.type}
            />
          ))}
        </div>
      </section>
      {/* About Indian Crown */}
      <section className="custom-container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.pexels.com/photos/2345975/pexels-photo-2345975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Close up of a delicious hamburger with cheese, lettuce, and a bun on a white plate in a restaurant kitchen with blurred background"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Right description & features */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-black">
              About Indian Crown
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Indian Crown, we are passionate about bringing the authentic
              flavors of India to your table. Our journey began over 15 years
              ago with a simple mission: to share the rich culinary heritage of
              India through carefully crafted dishes that balance traditional
              recipes with modern presentation.
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed">
              Each dish is prepared by our expert chefs using fresh ingredients,
              aromatic spices, and time-honored techniques. We take pride in
              offering a diverse menu that represents various regions of India,
              ensuring there's something for everyone to enjoy.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Clock className="h-6 w-6 text-amber-600" />}
                title="Fast Service"
                description="Quick & efficient"
              />
              <FeatureCard
                icon={<Utensils className="h-6 w-6 text-amber-600" />}
                title="Quality Food"
                description="Fresh ingredients"
              />
              <FeatureCard
                icon={<UserRound className="h-6 w-6 text-amber-600" />}
                title="Customer Favorite"
                description="Loved by many"
              />
              <FeatureCard
                icon={<UserRound className="h-6 w-6 text-amber-600" />}
                title="Friendly Staff"
                description="Professional service"
              />
            </div>
          </section>
        </div>
      </section>
      {/* Get in Touch */}
      <section className="custom-container mx-auto p-6 bg-[#fdf6ec]">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 items-start">
          {/* Right description & features */}
          <section className="grid grid-cols-1 lg:grid-cols-4 lg:col-span-4 gap-10">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif text-black">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-justify">
                Craving something? Have feedback, questions, or a special
                request? We’re just a message away! Whether it’s about your
                order, reservations, or just saying hi — we’d love to hear from
                you. Your satisfaction is always on our menu.
              </p>
            </div>
            <GetInTouchCard
              title={"Opening Hours"}
              icon={<Clock className="h-6 w-6 text-amber-600" />}
            >
              <p className="text-gray-600">Mon – Wed: 12:00AM to 8:00PM</p>
              <p className="text-gray-600">Thu – Fri: 12:00AM to 8:30PM</p>
              <p className="text-gray-600">Saturday: Closed</p>
              <p className="text-gray-600">Sunday: 1:00PM to 8:30PM</p>
            </GetInTouchCard>
            <GetInTouchCard
              title={"Location"}
              icon={<MapPinIcon className="h-6 w-6 text-amber-600" />}
            >
              <p className="text-gray-600">
                123 Restaurant Lane <br /> Foodie City, FC 12345
              </p>
            </GetInTouchCard>
            <GetInTouchCard
              title={"Contact"}
              icon={<Phone className="h-6 w-6 text-amber-600" />}
            >
              <p className="text-gray-600">
                123 Restaurant Lane <br /> Foodie City, FC 12345
              </p>
            </GetInTouchCard>
          </section>
          {/* Left Image */}
          <div className="overflow-hidden rounded-xl shadow-lg lg:col-span-2 justify-baseline">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6576.106762700287!2d-74.00152400000002!3d40.713139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e1!3m2!1sen!2sus!4v1751226242230!5m2!1sen!2sus"
              width="600"
              height="450"
              className="border-0 w-full h-auto"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow cursor-default flex items-center gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-serif font-semibold text-gray-950">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function GetInTouchCard({ icon, title, children }: any) {
  return (
    <div>
      <div className="">{icon}</div>
      <h3 className="text-lg font-serif font-semibold text-gray-950">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}
