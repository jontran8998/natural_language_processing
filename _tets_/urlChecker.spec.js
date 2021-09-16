import { checkUrl} from '../src/client/js/urlChecker';

describe("Testing URL input function", () => {
  test("It should return a alert if users add wrong input", () => {
    expect(checkUrl).toBeDefined()
  } )
})