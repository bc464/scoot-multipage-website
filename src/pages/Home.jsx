import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AppSignUp from "../components/AppSignUp/AppSignUp";
import Footer from "../components/Footer/Footer";
import ProcessBreakdown from "../components/ProcessBreakdown/ProcessBreakdown";
import LearnMoreEven from "../components/LearnMoreEven/LearnMoreEven";
import LearnMoreOdd from "../components/LearnMoreOdd/LearnMoreOdd";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProcessBreakdown />
      <LearnMoreEven
        heading={"Easy to use riding telemetry"}
        text={
          "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        }
        src={"./assets/images/telemetry.jpg"}
      />
      <LearnMoreOdd
        heading={"Coming to a city near you"}
        text={
          "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        }
        src={"./assets/images/near-you.jpg"}
      />
      <LearnMoreEven
        heading={"Zero hassle payments"}
        text={
          "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        }
        src={"./assets/images/payments.jpg"}
      />

      <AppSignUp />
      <Footer />
    </div>
  );
};

export default Home;
