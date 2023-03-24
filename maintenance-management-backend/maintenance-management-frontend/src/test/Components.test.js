// importing react for use in testing
import React from "react";
// importing renderer for use in testing
import renderer from "react-test-renderer";
// importing GitHub component to test
import { GitHub } from "../Components/GitHub";
// importing GitLab component to test
import { GitLab } from "../Components/GitLab";
// importing BitBucket component to test
import { BitBucket } from "../Components/BitBucket";

// using jest test function with test name
test("renders correctly", () => {
  // declaring tree as the component that a snapshot is created for   
    const tree = renderer.create(<GitHub />).toJSON();
    // testing whether the snapshot matches 
  expect(tree).toMatchSnapshot();
});

// using jest test function with test name
test("renders correctly", () => {
  // declaring tree as the component that a snapshot is created for
  const tree = renderer.create(<GitLab />).toJSON();
  // testing whether the snapshot matches
  expect(tree).toMatchSnapshot();
});

// using jest test function with test name
test("renders correctly", () => {
  // declaring tree as the component that a snapshot is created for
  const tree = renderer.create(<BitBucket />).toJSON();
  // testing whether the snapshot matches
  expect(tree).toMatchSnapshot();
});
