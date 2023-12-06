import { linkedIn, mailIcon, owner, phoneIcon } from "@/app/Base/SVG";
import React from "react";

export default function Touch() {
  return (
    <section className="touch full mobRev">
      <div className="auto__container">
        <div className="touch__inner">
          <div className="touch__inner-row">
            <div className="touch__inner-content">
              <h2 className="ex">
                Get in <br />
                touch with us
              </h2>
              <p>Connect with our experts for digital excellence</p>
              <div className="touch__inner-links">
                <a href="#">
                  <span>{owner}</span>
                  Co-owner | Myron Zimmerman
                </a>
                <a href="tel:+31 (0)20-12031231">
                  <span>{phoneIcon}</span>
                  +31 (0)20-12031231
                </a>
                <a href="mailto:hello@digiblend.nl"  className="inactive">
                  <span>{mailIcon}</span>
                  hello@digiblend.nl
                </a>
                <a href="#">
                  <span>{linkedIn}</span>
                  Plan Conversation
                </a>
              </div>
            </div>
            <form className="touch__inner-form">
              <label className="input2__outer">
                <p>Name</p>
                <div className="input2">
                  <input type="text" placeholder="Robert Smit" />
                </div>
              </label>
              <label className="input2__outer">
                <p>Company Email</p>
                <div className="input2">
                  <input type="email" placeholder="example@company.com" />
                </div>
              </label>
              <label className="input2__outer">
                <p>Phone Number</p>
                <div className="input2">
                  <input type="tel" placeholder="+ 31 6 22 133 218" />
                </div>
              </label>
              <label className="input2__outer">
                <p>Message</p>
                <div className="input2">
                  <textarea placeholder="Where can we help you with?" rows="7"></textarea>
                </div>
              </label>
              <div className="touch__inner-form-foot">
                <button type="submit" className="button primary blue">
                  Send Message{" "}
                  <span>
                    <img src="./images/icons/send.svg" alt="" />
                  </span>
                </button>
                <p>
                  Thank you for <br />
                  contacting us.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
