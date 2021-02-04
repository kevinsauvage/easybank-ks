import React from "react";
import Card from "./Card";
import "./SecondSectionHome.css";
import OnlineBankingImg from "./assets/images/icon-online.svg";
import BudgetingImg from "./assets/images/icon-budgeting.svg";
import OnboardingImg from "./assets/images/icon-onboarding.svg";
import OpenApiImg from "./assets/images/icon-api.svg";

const SecondSectionHome = () => {
  return (
    <div className="second__section__home">
      <div className="container">
        <div className="second__section__home__text">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="second__section__home__cards">
          <Card
            title="Online Banking"
            text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
            img={OnlineBankingImg}
          />
          <Card
            title="Simple Budgeting"
            text="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
            img={BudgetingImg}
          />
          <Card
            title="Fast Onboarding"
            text="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
            img={OnboardingImg}
          />
          <Card
            title="Open API"
            text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
            img={OpenApiImg}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSectionHome;
