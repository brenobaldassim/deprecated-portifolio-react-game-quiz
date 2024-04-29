import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("[UNIT] Testing the app component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe("Component valdiation", () => {
    it("displays 0 as a default value", () => {
      expect(wrapper.find("h1").text()).toContain("0");
    });
  });
});
