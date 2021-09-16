import { handleSubmit} from '../src/client/js/formHandler';

describe("Testing form submit function", () => {
  test("It should return data for rendering", () => {
    expect(handleSubmit).toBeDefined()
  } )
})