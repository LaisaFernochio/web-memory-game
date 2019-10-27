function TestHelpers() {
  this.call_test_case = function(info, test_case_func) {
    console.info(info);

    test_case_func();
  }

  this.check = function(condition_result, msg) {
    if(condition_result)
      throw msg;
  }
}

test_helpers = new TestHelpers();
