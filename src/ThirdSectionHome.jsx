import React from "react";
import "./ThirdSectionHome.css";
import MoneyImg from "./assets/images/image-currency.jpg";
import RestaurantImg from "./assets/images/image-restaurant.jpg";
import PlaneImg from "./assets/images/image-plane.jpg";
import ConfettiImg from "./assets/images//image-confetti.jpg";
import Article from "./Article";

const ThirdSectionHome = () => {
  return (
    <div className="third__section__home">
      <div className="container">
        <div className="third__section__title">
          <h3>Latest Articles</h3>
        </div>
        <div className="third__section__cards__article">
          <Article
            img={MoneyImg}
            name="By Claire Robinson"
            title="Receive money in any currency with no fees"
            text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
          />
          <Article
            img={RestaurantImg}
            name="By Wilson Hutton"
            title="Treat yourself without worrying about money"
            text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
          />
          <Article
            img={PlaneImg}
            name="By Wilson Hutton"
            title="Take your Easybank card wherever you go"
            text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
          />
          <Article
            img={ConfettiImg}
            name="By Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionHome;
