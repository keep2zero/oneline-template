import {start, Get} from '@oneline/core';

class App {
  @Get("/", "首页")
  public index() {
    return {
      hello: 'World'
    }
  }
}

start(3000);