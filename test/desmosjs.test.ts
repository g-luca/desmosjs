import { DesmosJS } from "../src/DesmosJS"


/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("Desmosjs is instantiable", () => {
    expect(new DesmosJS()).toBeInstanceOf(DesmosJS);
  });

});
